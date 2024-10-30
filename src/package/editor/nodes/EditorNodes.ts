import type {Klass, LexicalNode} from 'lexical';
import {CodeNode} from '@lexical/code';
import {HashtagNode} from '@lexical/hashtag';
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import {MarkNode} from '@lexical/mark';
import {OverflowNode} from '@lexical/overflow';
import {HorizontalRuleNode} from '@lexical/react/LexicalHorizontalRuleNode';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {TableCellNode, TableNode, TableRowNode} from '@lexical/table';
import {PageBreakNode} from "./PageBreakNode";
import {EmojiNode} from "./EmojiNode.tsx";
import {ImageNode} from "./ImageNode.tsx";
import {KeywordNode} from "./KeywordNode.ts";
import {FigmaNode} from "./FigmaNode.tsx";
import {TweetNode} from "./TweetNode.tsx";
import {YouTubeNode} from "./YouTubeNode.tsx";
import {CollapsibleContainerNode} from '../plugins/CollapsiblePlugin/CollapsibleContainerNode';
import {CollapsibleContentNode} from '../plugins/CollapsiblePlugin/CollapsibleContentNode';
import {CollapsibleTitleNode} from '../plugins/CollapsiblePlugin/CollapsibleTitleNode';
import {EquationNode} from "./EquationNode.tsx";
import {ExcalidrawNode} from "./ExcalidrawNode";
import {LayoutContainerNode} from "./LayoutContainerNode.ts";
import {LayoutItemNode} from "./LayoutItemNode.ts";
import {PollNode} from "./PollNode.tsx";
import {InlineImageNode} from "./InlineImageNode.tsx";
import {StickyNode} from "./StickyNode.tsx";

const EditorNodes: Array<Klass<LexicalNode>> = [
    CodeNode,
    MarkNode,
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    AutoLinkNode,
    LinkNode,
    HorizontalRuleNode,
    PageBreakNode,
    EmojiNode,
    ImageNode,
    KeywordNode,
    FigmaNode,
    TweetNode,
    YouTubeNode,
    CollapsibleContainerNode,
    CollapsibleContentNode,
    CollapsibleTitleNode,
    EquationNode,
    ExcalidrawNode,
    LayoutContainerNode,
    LayoutItemNode,
    PollNode,
    HashtagNode,
    InlineImageNode,
    TableNode,
    TableRowNode,
    TableCellNode,
    StickyNode,
    OverflowNode,
];

export default EditorNodes;
