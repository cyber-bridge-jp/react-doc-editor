import {
  $createTextNode,
  $getNodeByKey,
  $getSelection,
  $isRangeSelection, $isTextNode, $nodesOfType, CLICK_COMMAND,
  COMMAND_PRIORITY_EDITOR, COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW, CONTROLLED_TEXT_INSERTION_COMMAND,
  createCommand,
  KEY_ARROW_LEFT_COMMAND,
  KEY_ARROW_RIGHT_COMMAND, LexicalNode, SELECTION_CHANGE_COMMAND,
  TextNode
} from "lexical";
import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {
  $createAutofillNode,
  $isAutofillNode,
  AutofillNode,
  AutofillStage,
  AutofillType
} from "../../nodes/AutofillNode.ts";
import {$findMatchingParent, mergeRegister} from "@lexical/utils";
import {$createAutofillTokenNode, $isAutofillTokenNode, AutofillTokenNode} from "../../nodes/AutofillTokenNode.ts";
import {AutofillDataObject} from "./TriggerAutofill.tsx";
import {$createFileAttachNode} from "../../nodes/FileAttachNode.ts";

type InsertAutofillCommandProps = {
  label: string;
  autofillType: AutofillType;
  nodeToReplace?: TextNode | null;
  data?: string | number;
  fieldName?: string;
  callback?: (node: AutofillNode) => void;
}

export const INSERT_AUTOFILL = createCommand<InsertAutofillCommandProps>('INSERT_AUTOFILL');

interface AutofillPluginProps {
  stage: AutofillStage
  preData: AutofillDataObject[]
}

export default function AutofillPlugin({stage, preData}: AutofillPluginProps) {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (!editor.hasNodes([AutofillNode])) {
      throw new Error('AutofillPlugin: AutofillNode not registered on editor')
    }

    const onArrowKey = (isLeft: boolean) => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;

      const anchor = selection.anchor.getNode();

      // If selection is currently inside an AutofillNode → move out
      const container = $findMatchingParent(anchor, (node) => {
        return $isAutofillNode(node)
      });

      if ($isAutofillNode(container) && stage !== 2) {
        const textNodes = container.getAllTextNodes()
        if ((selection.anchor.offset === 0 && isLeft && anchor.is(textNodes[0])) || (selection.anchor.offset === anchor.getTextContentSize() && !isLeft && anchor.is(textNodes[textNodes.length - 1]))) {
          editor.update(() => {
            if (isLeft) {
              container.selectPrevious();
            } else {
              container.selectNext();
            }
          });
          return true;
        }
      }
      return false;
    };

    const getData = (field: string, label: string) => {
      const data = preData.find((d) => d[field] && d[field].label === label)
      if (data) {
        const dataOption = data[field]
        let value = dataOption.value
        if (value && dataOption.isMan) {
          value = parseInt(value.toString()) * 10000
        }
        if (value && dataOption.isNumber) {
          value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        return value || '-'
      }
      return '-'
    }

    const updateAutoData = () => {
      editor.update(() => {
        const nodes = $nodesOfType(AutofillNode)
        nodes.forEach(node => {
          node.setStage(stage)
          if (node.__autofillType === 'pre' && (stage === 2 || stage === 3) && node.__fieldName) {
            if (stage === 2) {
              node.setData(getData(node.__fieldName, node.__label) || '-')
            } else {
              const child = node.getFirstChild()
              if (child && $isAutofillTokenNode(child)) {
                const textNode = $createTextNode(child.getTextContent())
                  .setFormat(child.getFormat())
                  .setDetail(child.getDetail())
                  .setStyle(child.getStyle())
                node.append(textNode)
                child.remove()
                if (!node.getDataIsSet()) {
                  const v = getData(node.__fieldName, node.__label)
                  node.setData(v || '-')
                  textNode.setTextContent(v.toString())
                  node.setDataIsSet(true)
                }
              }
            }
          } else if (node.__autofillType === 'input' && (stage === 2 || stage === 3)) {
            const child = node.getFirstChild()
            if (child && $isAutofillTokenNode(child) && node.__inputType === 'file') {
              const newNode = $createAutofillTokenNode(node.__title || '')
                .setFormat(child.getFormat())
                .setDetail(child.getDetail())
                .setStyle(child.getStyle())

              node.append(
                $createFileAttachNode('https://', {target: '_blank', title: node.__title})
                  .append(newNode)
              )
              child.remove()
            }
          }
        })
      })
    }

    updateAutoData()

    return mergeRegister(
      editor.registerCommand(
        KEY_ARROW_RIGHT_COMMAND,
        () => {
          if (stage === 3) {
            return false
          }
          return onArrowKey(false)
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ARROW_LEFT_COMMAND,
        () => {
          if (stage === 3) {
            return false
          }
          return onArrowKey(true)
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (event) => {
          const target = event.target as HTMLElement;
          const nodeKey = target.getAttribute('data-node-key');
          if (!nodeKey) return false;

          const node = $getNodeByKey(nodeKey);
          if (!node || !$isAutofillTokenNode(node)) return false;
          node.select(0, node.getTextContentSize())
          editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined)
          return true;
        },
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand(
        INSERT_AUTOFILL,
        ({label, autofillType, nodeToReplace, data, fieldName, callback}) => {
          editor.update(() => {
            const container = $createAutofillNode({
              label,
              autofillType,
              data,
              fieldName
            });
            container.append($createAutofillTokenNode(container.getLabelForText()))
            if (nodeToReplace && nodeToReplace.isAttached()) {
              nodeToReplace.replace(container);
            }
            const next = container.getNextSibling()
            if (!next) {
              container.getParent()?.append($createTextNode());
            }
            if (callback && container) {
              callback(container)
            }
            container.selectNext();
          });
          return true
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) return false;

          const anchorNode = selection.anchor.getNode();
          if (!($isAutofillTokenNode(anchorNode) && anchorNode.isTextEntity())) return false;

          if (stage !== 1) return true;

          const parent = anchorNode.getParent();
          if (!(parent && $isAutofillNode(parent) && typeof payload === 'string')) return true;

          const createTextNodeFrom = (refNode: AutofillTokenNode) =>
            $createTextNode(payload)
              .setFormat(refNode.getFormat())
              .setDetail(refNode.getDetail())
              .setStyle(refNode.getStyle());

          const insertTextNode = (targetParent: AutofillNode, position: 'after' | 'before', refNode: AutofillTokenNode) => {
            const textNode = createTextNodeFrom(refNode);
            if (position === 'after') targetParent.insertAfter(textNode);
            else targetParent.insertBefore(textNode);
            textNode.selectEnd();
          };

          const handleSiblingInsert = (sibling: LexicalNode | null, insertFn: () => void) => {
            if (sibling && !$isAutofillTokenNode(sibling) && $isTextNode(sibling)) {
              sibling.setTextContent(payload + sibling.getTextContent());
              sibling.selectEnd();
            } else {
              insertFn();
            }
          };

          const isAtStart = selection.anchor.offset === 0;

          if (isAtStart) {
            const prev = parent.getPreviousSibling();
            handleSiblingInsert(prev, () => insertTextNode(parent, 'before', anchorNode));
          } else {
            const next = parent.getNextSibling();
            handleSiblingInsert(next, () => insertTextNode(parent, 'after', anchorNode));
          }
          return true;
        },
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerNodeTransform(AutofillNode, (node) => {
        if (node.getChildrenSize() === 0 && stage === 1) {
          node.remove();
        }
      })
    )

  }, [editor, preData, stage])

  return null
}
