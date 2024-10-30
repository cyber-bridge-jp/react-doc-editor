import {EditorThemeClasses, TEXT_TYPE_TO_FORMAT, TextFormatType} from 'lexical'

function normalizeClassNames(
  ...classNames: Array<typeof undefined | boolean | null | string>
): Array<string> {
  const rval = [];
  for (const className of classNames) {
    if (className && typeof className === 'string') {
      for (const [s] of className.matchAll(/\S+/g)) {
        rval.push(s);
      }
    }
  }
  return rval;
}

export function toggleTextFormatType(
  format: number,
  type: TextFormatType,
  alignWithFormat: null | number,
): number {
  const activeFormat = TEXT_TYPE_TO_FORMAT[type];
  if (
    alignWithFormat !== null &&
    (format & activeFormat) === (alignWithFormat & activeFormat)
  ) {
    return format;
  }
  let newFormat = format ^ activeFormat;
  if (type === 'subscript') {
    newFormat &= ~TEXT_TYPE_TO_FORMAT.superscript;
  } else if (type === 'superscript') {
    newFormat &= ~TEXT_TYPE_TO_FORMAT.subscript;
  }
  return newFormat;
}

export function getCachedClassNameArray(
  classNamesTheme: EditorThemeClasses,
  classNameThemeType: string,
): Array<string> {
  if (classNamesTheme.__lexicalClassNameCache === undefined) {
    classNamesTheme.__lexicalClassNameCache = {};
  }
  const classNamesCache = classNamesTheme.__lexicalClassNameCache;
  const cachedClassNames = classNamesCache[classNameThemeType];
  if (cachedClassNames !== undefined) {
    return cachedClassNames;
  }
  const classNames = classNamesTheme[classNameThemeType];
  // As we're using classList, we need
  // to handle className tokens that have spaces.
  // The easiest way to do this to convert the
  // className tokens to an array that can be
  // applied to classList.add()/remove().
  if (typeof classNames === 'string') {
    const classNamesArr = normalizeClassNames(classNames);
    classNamesCache[classNameThemeType] = classNamesArr;
    return classNamesArr;
  }
  return classNames;
}