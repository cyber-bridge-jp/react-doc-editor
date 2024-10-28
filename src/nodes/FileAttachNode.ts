import {
  $applyNodeReplacement, $getSelection, $isElementNode, $isRangeSelection, createCommand,
  DOMConversionMap,
  DOMConversionOutput,
  EditorConfig,
  ElementNode, isHTMLAnchorElement, LexicalCommand, LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from 'lexical'
import {$findMatchingParent} from '@lexical/utils'
import {$getAncestor} from 'lexical/LexicalUtils'

export type FileAttachAttributes = {
  rel?: null | string;
  target?: null | string;
  title?: null | string;
};

export type SerializedFileAttachNode = Spread<
  {
    url: string;
  },
  Spread<FileAttachAttributes, SerializedElementNode>
>;

type FileAttachHTMLElementType = HTMLAnchorElement | HTMLSpanElement;

const SUPPORTED_URL_PROTOCOLS = new Set(['http:', 'https:'])

export class FileAttachNode extends ElementNode {
  __url: string;
  __target: null | string;
  __rel: null | string;
  __title: null | string;

  static getType(): string {
    return 'file-attach';
  }

  static clone(node: FileAttachNode): FileAttachNode {
    return new FileAttachNode(
      node.__url,
      {rel: node.__rel, target: node.__target, title: node.__title},
      node.__key,
    );
  }

  constructor(url: string, attributes: FileAttachAttributes = {}, key?: NodeKey) {
    super(key);
    this.__url = url;
    this.__target = attributes.target || null;
    this.__rel = attributes.rel || null;
    this.__title = attributes.title || null;
  }

  createDOM(config:EditorConfig): FileAttachHTMLElementType {
    const element = document.createElement('a');
    element.href = this.sanitizeUrl(this.__url);
    if (this.__rel !== null) {
      element.rel = this.__rel;
    }
    if (this.__target !== null) {
      element.target = this.__target;
    }
    if (this.__title !== null) {
      element.title = this.__title;
    }
    element.className = config.theme.fileAttachment;
    return element;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateDOM(prevNode: FileAttachNode, anchor: FileAttachHTMLElementType, _config: EditorConfig): boolean {
    if (anchor instanceof HTMLAnchorElement) {
      const url = this.__url;
      const target = this.__target;
      const rel = this.__rel;
      const title = this.__title;
      if (url !== prevNode.__url) {
        anchor.href = this.sanitizeUrl(url);
      }
      if (target !== prevNode.__target) {
        if (target) {
          anchor.target = target;
        } else {
          anchor.removeAttribute('target');
        }
      }

      if (rel !== prevNode.__rel) {
        if (rel) {
          anchor.rel = rel;
        } else {
          anchor.removeAttribute('rel');
        }
      }

      if (title !== prevNode.__title) {
        if (title) {
          anchor.title = title;
        } else {
          anchor.removeAttribute('title');
        }
      }
    }
    return false;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      a: (_node: Node) => ({
        conversion: $convertAnchorElement,
        priority: 1,
      }),
    };
  }

  static importJSON(
    serializedNode: SerializedFileAttachNode,
  ): FileAttachNode {
    const node = $createFileAttachNode(serializedNode.url, {
      rel: serializedNode.rel,
      target: serializedNode.target,
      title: serializedNode.title,
    });
    node.setFormat(serializedNode.format);
    node.setIndent(serializedNode.indent);
    node.setDirection(serializedNode.direction);
    return node;
  }

  sanitizeUrl(url: string): string {
    try {
      const parsedUrl = new URL(url);
      // eslint-disable-next-line no-script-url
      if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
        return 'about:blank';
      }
    } catch {
      return url;
    }
    return url;
  }

  exportJSON(): SerializedFileAttachNode {
    return {
      ...super.exportJSON(),
      url: this.getURL(),
      rel: this.getRel(),
      target: this.getTarget(),
      title: this.getTitle(),
      type: 'file-attach',
      version: 1,
    };
  }

  getURL(): string {
    return this.getLatest().__url;
  }

  setURL(url: string): void {
    const writable = this.getWritable();
    writable.__url = url;
  }

  getTarget(): null | string {
    return this.getLatest().__target;
  }

  setTarget(target: null | string): void {
    const writable = this.getWritable();
    writable.__target = target;
  }

  getRel(): null | string {
    return this.getLatest().__rel;
  }

  setRel(rel: null | string): void {
    const writable = this.getWritable();
    writable.__rel = rel;
  }

  getTitle(): null | string {
    return this.getLatest().__title;
  }

  setTitle(title: null | string): void {
    const writable = this.getWritable();
    writable.__title = title;
  }

}

function $convertAnchorElement(domNode: Node): DOMConversionOutput {
  let node = null;
  if (isHTMLAnchorElement(domNode)) {
    const content = domNode.textContent;
    if ((content !== null && content !== '') || domNode.children.length > 0) {
      node = $createFileAttachNode(domNode.getAttribute('href') || '', {
        rel: domNode.getAttribute('rel'),
        target: domNode.getAttribute('target'),
        title: domNode.getAttribute('title'),
      });
    }
  }
  return {node};
}

export function $createFileAttachNode(
  url: string,
  attributes?: FileAttachAttributes,
): FileAttachNode {
  return $applyNodeReplacement(new FileAttachNode(url, attributes));
}

export function $isFileAttachNode(
  node: LexicalNode | null | undefined,
): node is FileAttachNode {
  return node instanceof FileAttachNode;
}

export const TOGGLE_FILE_ATTACH: LexicalCommand<
  string | {url: string} & FileAttachAttributes | null
> = createCommand('TOGGLE_FILE_ATTACH');

export function $toggleFileAttach(
  url: string,
  attributes: FileAttachAttributes = {},
): void {
  const {target, title} = attributes;
  const rel = attributes.rel === undefined ? 'noreferrer' : attributes.rel;
  const selection = $getSelection();

  if ($isRangeSelection(selection) || selection === null) {
    return;
  }
  const nodes = selection.extract();

  if (url === null) {
    nodes.forEach(node => {
      const parentFileAttach = $findMatchingParent(
        node,
        (parent): parent is FileAttachNode => $isFileAttachNode(parent),
      );

      if (parentFileAttach) {
        const children = parentFileAttach.getChildren();

        for (let i = 0; i < children.length; i++) {
          parentFileAttach.insertBefore(children[i]);
        }

        parentFileAttach.remove();
      }
    });
  } else {
    if (nodes.length === 1) {
      const firstNode = nodes[0];
      const fileAttachNode = $getAncestor(firstNode, $isFileAttachNode);
      if (fileAttachNode !== null) {
        fileAttachNode.setURL(url);
        if (target !== undefined) {
          fileAttachNode.setTarget(target);
        }
        if (rel !== undefined) {
          fileAttachNode.setRel(rel);
        }
        if (title !== undefined) {
          fileAttachNode.setTitle(title);
        }
        return;
      }
    }

    let prevParent: ElementNode | FileAttachNode | null = null;
    let fileAttachNode: FileAttachNode | null = null;

    nodes.forEach(node => {
      const parent = node.getParent();

      if (
        parent === fileAttachNode ||
        parent === null ||
        ($isElementNode(node) && !node.isInline())
      ) {
        return;
      }

      if ($isFileAttachNode(parent)) {
        fileAttachNode = parent;
        parent.setURL(url);
        if (target !== undefined) {
          parent.setTarget(target);
        }
        if (rel !== undefined) {
          fileAttachNode.setRel(rel);
        }
        if (title !== undefined) {
          fileAttachNode.setTitle(title);
        }
        return;
      }

      if (!parent.is(prevParent)) {
        prevParent = parent;
        fileAttachNode = $createFileAttachNode(url, {rel, target, title});

        if ($isFileAttachNode(parent)) {
          if (node.getPreviousSibling() === null) {
            parent.insertAfter(fileAttachNode);
          } else {
            parent.insertBefore(fileAttachNode);
          }
        } else {
          node.insertBefore(fileAttachNode);
        }
      }

      if ($isFileAttachNode(node)) {
        if (node.is(fileAttachNode)) {
          return;
        }
        if (fileAttachNode !== null) {
          const children = node.getChildren();

          for (let i = 0; i < children.length; i++) {
            fileAttachNode.append(children[i]);
          }
        }

        node.remove();
        return;
      }

      if (fileAttachNode !== null) {
        fileAttachNode.append(node);
      }
    });
  }
}
