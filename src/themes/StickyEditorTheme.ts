import type {EditorThemeClasses} from 'lexical';

import './StickyEditorTheme.css';

import baseTheme from './EditorTheme';

const theme: EditorThemeClasses = {
  ...baseTheme,
  paragraph: 'st__paragraph',
};

export default theme;