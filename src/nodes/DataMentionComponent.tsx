import React, {Suspense} from 'react'
import {LexicalNestedComposer} from "@lexical/react/LexicalNestedComposer";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import LinkPlugin from "../plugins/LinkPlugin";
import EmojisPlugin from "../plugins/EmojisPlugin";
import {HashtagPlugin} from "@lexical/react/LexicalHashtagPlugin";
import KeywordsPlugin from "../plugins/KeywordsPlugin";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import Placeholder from "../ui/Placeholder.tsx";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {LexicalEditor} from "lexical/LexicalEditor";
import {useSharedHistoryContext} from "../context/SharedHistoryContext.tsx";
import './DataMentionNode.css';
import {LineBreakNode, ParagraphNode, RootNode, TextNode} from 'lexical'
import {EmojiNode} from './EmojiNode.tsx'
import {KeywordNode} from './KeywordNode.ts'
export default function DataMentionComponent(
    {
        dataMention,
        label,
        value,
        data,
        step,
    }: {
        dataMention: 'auto' | 'input' | 'after-auto';
        label: string;
        value?: LexicalEditor;
        data: string | number | null;
        step: 1 | 2 | 3;
    }
): React.JSX.Element {
    const {historyState} = useSharedHistoryContext();
    return (
        <Suspense fallback={null}>
            {
                dataMention !== 'input' ?
                    step === 3 ?
                        (
                            <div>
                                {data}
                            </div>
                        ) : step === 2 ?
                            (
                                <div>{dataMention === 'after-auto' ? label : data}</div>
                            ) :
                            (
                                <div>{label}</div>
                            )
                    : (
                        step !== 1 && value ?
                            <div className="data-mention-input-container" data-mention-input-step={step}>
                                <b>{label}</b>
                                <LexicalNestedComposer
                                  initialEditor={value}
                                  initialNodes={[RootNode, TextNode, LineBreakNode, ParagraphNode, EmojiNode, KeywordNode]}
                                >
                                    <AutoFocusPlugin/>
                                    <LinkPlugin/>
                                    <EmojisPlugin/>
                                    <HashtagPlugin/>
                                    <KeywordsPlugin/>
                                    <HistoryPlugin externalHistoryState={historyState}/>
                                    <RichTextPlugin
                                        contentEditable={
                                            <ContentEditable
                                                data-mention-input-step={step}
                                                className="DataMention__contentEditable"/>
                                        }
                                        placeholder={
                                            <Placeholder className="DataMention__placeholder">
                                                Enter a {label}...
                                            </Placeholder>
                                        }
                                        ErrorBoundary={LexicalErrorBoundary}
                                    />
                                </LexicalNestedComposer>
                            </div> :
                            <div>{label}</div>
                    )
            }
        </Suspense>
    );
}