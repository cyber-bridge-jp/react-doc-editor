import type {
    BaseSelection,
    LexicalCommand,
    LexicalEditor,
    NodeKey,
} from 'lexical';

import './ImageNode.css';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HashtagPlugin} from '@lexical/react/LexicalHashtagPlugin';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalNestedComposer} from '@lexical/react/LexicalNestedComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {useLexicalNodeSelection} from '@lexical/react/useLexicalNodeSelection';
import {mergeRegister} from '@lexical/utils';
import {
    $getNodeByKey,
    $getSelection,
    $isNodeSelection,
    $setSelection,
    CLICK_COMMAND,
    COMMAND_PRIORITY_LOW,
    createCommand,
    KEY_BACKSPACE_COMMAND,
    KEY_DELETE_COMMAND,
    KEY_ENTER_COMMAND,
    KEY_ESCAPE_COMMAND,
    SELECTION_CHANGE_COMMAND,
} from 'lexical';
import React from 'react';
import {Suspense, useCallback, useEffect, useRef, useState} from 'react';

import {useSharedHistoryContext} from '../context/SharedHistoryContext';
import LinkPlugin from '../plugins/LinkPlugin';
import Placeholder from '../ui/Placeholder';
import {$isImageNode} from './ImageNode';
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import ImageResizer from "../ui/ImageResizer.tsx";
import EmojisPlugin from "../plugins/EmojisPlugin";
import KeywordsPlugin from "../plugins/KeywordsPlugin";
import {Positioning} from "./StickyComponent.tsx";

const imageCache = new Set();

export const RIGHT_CLICK_IMAGE_COMMAND: LexicalCommand<MouseEvent> =
    createCommand('RIGHT_CLICK_IMAGE_COMMAND');

function positionSticky(
    stickyElem: HTMLElement,
    positioning: Positioning,
): void {
    const style = stickyElem.style;
    style.top = positioning.y + 'px';
    style.left = positioning.x + 'px';
}

function useSuspenseImage(src: string) {
    if (!imageCache.has(src)) {
        throw new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imageCache.add(src);
                resolve(null);
            };
        });
    }
}

function LazyImage({
                       altText,
                       className,
                       imageRef,
                       src,
                       width,
                       height,
                       maxWidth,
                   }: {
    altText: string;
    className: string | null;
    height: 'inherit' | number;
    imageRef: { current: null | HTMLImageElement };
    maxWidth: number;
    src: string;
    width: 'inherit' | number;
}): JSX.Element {
    useSuspenseImage(src);
    return (
        <img
            className={className || undefined}
            src={src}
            alt={altText}
            ref={imageRef}
            style={{
                height,
                maxWidth,
                width,
            }}
            draggable="false"
        />
    );
}

export default function ImageComponent({
                                           src,
                                           altText,
                                           nodeKey,
                                           width,
                                           height,
                                           maxWidth,
                                           resizable,
                                           showCaption,
                                           caption,
                                           captionsEnabled,
                                           isAbsolute,
                                           xOffset,
                                           yOffset,
                                       }: {
    altText: string;
    caption: LexicalEditor;
    height: 'inherit' | number;
    maxWidth: number;
    nodeKey: NodeKey;
    resizable: boolean;
    showCaption: boolean;
    src: string;
    width: 'inherit' | number;
    captionsEnabled: boolean;
    isAbsolute: boolean;
    xOffset: number;
    yOffset: number;
}): React.JSX.Element {
    const imageRef = useRef<null | HTMLImageElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const stickyContainerRef = useRef<null | HTMLDivElement>(null);
    const [isSelected, setSelected, clearSelection] =
        useLexicalNodeSelection(nodeKey);
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const [editor] = useLexicalComposerContext();
    const [selection, setSelection] = useState<BaseSelection | null>(null);
    const activeEditorRef = useRef<LexicalEditor | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const positioningRef = useRef<Positioning>({
        isDragging: false,
        offsetX: 0,
        offsetY: 0,
        rootElementRect: null,
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const position = positioningRef.current;
        position.x = xOffset;
        position.y = yOffset;

        const stickyContainer = stickyContainerRef.current;
        if (stickyContainer !== null) {
            positionSticky(stickyContainer, position);
        }
    }, [xOffset, yOffset]);

    useEffect(() => {
        if (isAbsolute) {
            const position = positioningRef.current;
            position.x = xOffset;
            position.y = yOffset;

            const stickyContainer = stickyContainerRef.current;
            if (stickyContainer !== null) {
                positionSticky(stickyContainer, position);
            }
        }
    }, [xOffset, yOffset, isAbsolute]);

    const onDelete = useCallback(
        (payload: KeyboardEvent) => {
            if (isSelected && $isNodeSelection($getSelection())) {
                const event: KeyboardEvent = payload;
                event.preventDefault();
                const node = $getNodeByKey(nodeKey);
                if ($isImageNode(node)) {
                    node.remove();
                    return true;
                }
            }
            return false;
        },
        [isSelected, nodeKey],
    );

    const onEnter = useCallback(
        (event: KeyboardEvent) => {
            const latestSelection = $getSelection();
            const buttonElem = buttonRef.current;
            if (
                isSelected &&
                $isNodeSelection(latestSelection) &&
                latestSelection.getNodes().length === 1
            ) {
                if (showCaption) {
                    // Move focus into nested editor
                    $setSelection(null);
                    event.preventDefault();
                    caption.focus();
                    return true;
                } else if (
                    buttonElem !== null &&
                    buttonElem !== document.activeElement
                ) {
                    event.preventDefault();
                    buttonElem.focus();
                    return true;
                }
            }
            return false;
        },
        [caption, isSelected, showCaption],
    );

    const onEscape = useCallback(
        (event: KeyboardEvent) => {
            if (
                activeEditorRef.current === caption ||
                buttonRef.current === event.target
            ) {
                $setSelection(null);
                editor.update(() => {
                    setSelected(true);
                    const parentRootElement = editor.getRootElement();
                    if (parentRootElement !== null) {
                        parentRootElement.focus();
                    }
                });
                return true;
            }
            return false;
        },
        [caption, editor, setSelected],
    );

    const onClick = useCallback(
        (payload: MouseEvent) => {
            const event = payload;
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
            if (isResizing) {
                return true;
            }
            if (event.target === imageRef.current) {
                if (event.shiftKey) {
                    setSelected(!isSelected);
                } else {
                    clearSelection();
                    setSelected(true);
                }
                return true;
            }

            return false;
        },
        [isResizing, isSelected, setSelected, clearSelection],
    );

    const onRightClick = useCallback(
        (event: MouseEvent): void => {
            editor.getEditorState().read(() => {
                const domElement = event.target as HTMLElement;
                if (
                    domElement.tagName === 'IMG' &&
                    event.target === imageRef.current
                    && editor.isEditable()
                ) {
                    event.preventDefault();
                    if (event.shiftKey) {
                        setSelected(!isSelected);
                    } else {
                        clearSelection();
                        setSelected(true);
                        setIsMenuOpen(true);
                    }
                }
            });
        },
        [editor],
    );

    const handlePointerUp = (e: PointerEvent) => {
        const stickyContainer = stickyContainerRef.current;
        const positioning = positioningRef.current;
        const rootElement = editor.getRootElement();
        if (stickyContainer && positioningRef.current.isDragging && e.target === stickyContainer.firstChild) {
            positioningRef.current.isDragging = false;
            e.preventDefault();
            stickyContainer.classList.remove('dragging');
            editor.update(() => {
                const node = $getNodeByKey(nodeKey);
                if ($isImageNode(node)) {
                    node.setPosition(positioning.x, positioning.y);
                }
            });
        }
        rootElement?.removeEventListener('pointermove', handlePointerMove);
        rootElement?.removeEventListener('pointerup', handlePointerUp);
    }

    const handlePointerMove = (event: PointerEvent) => {
        const stickyContainer = stickyContainerRef.current;
        const positioning = positioningRef.current;
        const rootElementRect = positioning.rootElementRect;
        if (
            stickyContainer !== null &&
            positioning.isDragging &&
            rootElementRect !== null
        ) {
            positioning.x = event.pageX - positioning.offsetX - rootElementRect.left;
            positioning.y = event.pageY - positioning.offsetY - rootElementRect.top;
            positionSticky(stickyContainer, positioning);
        }
    };

    const handlePointerEvent = (e: React.PointerEvent<HTMLDivElement>) => {
        const stickyContainer = stickyContainerRef.current;
        const positioning = positioningRef.current;
        const rootElement = editor.getRootElement();
        if (stickyContainer !== null && e.button !== 2 && isAbsolute && e.target === stickyContainer?.firstChild && editor.isEditable()) {
            positioning.rootElementRect = stickyContainer.parentElement?.getBoundingClientRect() || null;
            if (positioning.rootElementRect !== null) {
                const {top, left} = stickyContainer.getBoundingClientRect();
                positioning.isDragging = true;
                positioning.offsetX = e.pageX - left;
                positioning.offsetY = e.pageY - top;
                stickyContainer.classList.add('dragging');
                rootElement?.addEventListener('pointermove', handlePointerMove);
                rootElement?.addEventListener('pointerup', handlePointerUp);
            }
        }
    }

    useEffect(() => {
        let isMounted = true;
        const rootElement = editor.getRootElement();
        const unregister = mergeRegister(
            editor.registerUpdateListener(({editorState}) => {
                if (isMounted) {
                    setSelection(editorState.read(() => $getSelection()));
                }
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_, activeEditor) => {
                    activeEditorRef.current = activeEditor;
                    return false;
                },
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerCommand<MouseEvent>(
                CLICK_COMMAND,
                onClick,
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerCommand<MouseEvent>(
                RIGHT_CLICK_IMAGE_COMMAND,
                onClick,
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerCommand(
                KEY_DELETE_COMMAND,
                onDelete,
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerCommand(
                KEY_BACKSPACE_COMMAND,
                onDelete,
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerCommand(KEY_ENTER_COMMAND, onEnter, COMMAND_PRIORITY_LOW),
            editor.registerCommand(
                KEY_ESCAPE_COMMAND,
                onEscape,
                COMMAND_PRIORITY_LOW,
            ),
        );

        rootElement?.addEventListener('contextmenu', onRightClick);

        return () => {
            isMounted = false;
            unregister();
            rootElement?.removeEventListener('contextmenu', onRightClick);
        };
    }, [
        clearSelection,
        editor,
        isResizing,
        isSelected,
        nodeKey,
        onDelete,
        onEnter,
        onEscape,
        onClick,
        onRightClick,
        setSelected,
    ]);

    const setShowCaption = (show = true) => {
        editor.update(() => {
            const node = $getNodeByKey(nodeKey);
            if ($isImageNode(node)) {
                node.setShowCaption(show);
            }
        });
    };

    const onResizeEnd = (
        nextWidth: 'inherit' | number,
        nextHeight: 'inherit' | number,
    ) => {
        // Delay hiding the resize bars for click case
        setTimeout(() => {
            setIsResizing(false);
        }, 200);

        editor.update(() => {
            const node = $getNodeByKey(nodeKey);
            if ($isImageNode(node)) {
                node.setWidthAndHeight(nextWidth, nextHeight);
            }
        });
    };

    const onAbsoluteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        editor.update(() => {
            const node = $getNodeByKey(nodeKey);
            if ($isImageNode(node)) {
                node.setAbsolute(e.target.checked);
            }
        });
    }

    const onResizeStart = () => {
        setIsResizing(true);
    };

    const {historyState} = useSharedHistoryContext();


    const draggable = isSelected && $isNodeSelection(selection) && !isResizing;
    const isFocused = isSelected || isResizing;
    return (
        <Suspense fallback={null}>
            <>
                <div
                    ref={stickyContainerRef}
                    draggable={!isAbsolute && draggable}
                    style={{
                        position: isAbsolute ? 'absolute' : 'initial',
                        zIndex: isAbsolute ? 1 : 0,
                    }}
                    onPointerDown={handlePointerEvent}
                >
                    <LazyImage
                        className={
                            isFocused
                                ? `focused ${$isNodeSelection(selection) ? 'draggable' : ''}`
                                : ''
                        }
                        src={src}
                        altText={altText}
                        imageRef={imageRef}
                        width={width}
                        height={height}
                        maxWidth={maxWidth}
                    />
                    {showCaption && (
                        <div className="image-caption-container">
                            <LexicalNestedComposer initialEditor={caption}>
                                <AutoFocusPlugin/>
                                <LinkPlugin/>
                                <EmojisPlugin/>
                                <HashtagPlugin/>
                                <KeywordsPlugin/>
                                <HistoryPlugin externalHistoryState={historyState}/>
                                <RichTextPlugin
                                    contentEditable={
                                        <ContentEditable className="ImageNode__contentEditable"/>
                                    }
                                    placeholder={
                                        <Placeholder className="ImageNode__placeholder">
                                            Enter a caption...
                                        </Placeholder>
                                    }
                                    ErrorBoundary={LexicalErrorBoundary}
                                />
                            </LexicalNestedComposer>
                        </div>
                    )}
                    {isMenuOpen && (
                        <div className="image-context-menu">
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isAbsolute}
                                        onChange={onAbsoluteChange}
                                    />
                                    Absolute
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={showCaption}
                                        onChange={() => setShowCaption(!showCaption)}
                                    />
                                    Show caption
                                </label>
                            </div>
                        </div>
                    )}
                    {resizable && $isNodeSelection(selection) && isFocused && editor.isEditable() && (<ImageResizer
                            showCaption={showCaption}
                            setShowCaption={setShowCaption}
                            editor={editor}
                            buttonRef={buttonRef}
                            imageRef={imageRef}
                            maxWidth={maxWidth}
                            onResizeStart={onResizeStart}
                            onResizeEnd={onResizeEnd}
                            captionsEnabled={captionsEnabled}
                        />
                    )}
                </div>

            </>
        </Suspense>
    );
}