import type {TableOfContentsEntry} from '@lexical/react/LexicalTableOfContents'
import type {HeadingTagType} from '@lexical/rich-text'
import type {NodeKey} from 'lexical'

import './index.css'

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {TableOfContentsPlugin as LexicalTableOfContentsPlugin} from '@lexical/react/LexicalTableOfContentsPlugin'
import {useEffect, useRef, useState} from 'react'
import * as React from 'react'

const MARGIN_ABOVE_EDITOR = 624
const HEADING_WIDTH = 9

function indent(tagName: HeadingTagType) {
  if (tagName === 'h2') {
    return 'heading2'
  } else if (tagName === 'h3') {
    return 'heading3'
  }
}

function isHeadingAtTheTopOfThePage(element: HTMLElement): boolean {
  const elementYPosition = element?.getClientRects()[0].y
  return (
    elementYPosition >= MARGIN_ABOVE_EDITOR &&
    elementYPosition <= MARGIN_ABOVE_EDITOR + HEADING_WIDTH
  )
}

function isHeadingAboveViewport(element: HTMLElement): boolean {
  const elementYPosition = element?.getClientRects()[0].y
  return elementYPosition < MARGIN_ABOVE_EDITOR
}

function isHeadingBelowTheTopOfThePage(element: HTMLElement): boolean {
  const elementYPosition = element?.getClientRects()[0].y
  return elementYPosition >= MARGIN_ABOVE_EDITOR + HEADING_WIDTH
}

function TableOfContentsList(
  {
    tableOfContents,
  }: {
    tableOfContents: Array<TableOfContentsEntry>;
  },
): React.ReactElement {
  const [selectedKey, setSelectedKey] = useState('')
  const tableOfContentsRef = useRef<HTMLUListElement | null>(null)
  const scrollElementRef = useRef<HTMLElement | null>(null)
  const selectedIndex = useRef(0)
  const [editor] = useLexicalComposerContext()
  const scrollPosition = useRef(new Map<HTMLElement, number>())

  function scrollToNode(key: NodeKey, currIndex: number) {
    editor.getEditorState().read(() => {
      const domElement = editor.getElementByKey(key)
      if (domElement !== null) {
        if (!scrollElementRef.current) {
          domElement.scrollIntoView()
        } else {
          scrollElementRef.current?.scrollTo({
            top: domElement.offsetTop - scrollElementRef.current.offsetTop,
            behavior: 'smooth',
          })
        }
        setSelectedKey(key)
        selectedIndex.current = currIndex
      }
    })
  }

  function getScrollContainer(element: HTMLElement | null): HTMLElement[] {
    if (element === null) {
      return []
    }
    const scrollableElements: HTMLElement[] = []
    let parent = element.parentElement

    while (parent) {
      const overflowY = window.getComputedStyle(parent).overflowY
      const overflowX = window.getComputedStyle(parent).overflowX
      const isScrollableY = overflowY === 'scroll' || overflowY === 'auto'
      const isScrollableX = overflowX === 'scroll' || overflowX === 'auto'

      if ((isScrollableY && parent.scrollHeight > parent.clientHeight) ||
        (isScrollableX && parent.scrollWidth > parent.clientWidth)) {
        scrollableElements.push(parent) // Found the scrollable parent
      }

      parent = parent.parentElement // Move up to the next parent
    }

    return scrollableElements
  }

  useEffect(() => {
    const rootElement = editor.getRootElement()
    const scrollableElements = getScrollContainer(rootElement)

    function scrollCallback(event: Event) {
      scrollElementRef.current = event.target as HTMLElement
      if (
        tableOfContents.length !== 0 &&
        selectedIndex.current < tableOfContents.length - 1
      ) {
        let currentHeading = editor.getElementByKey(
          tableOfContents[selectedIndex.current][0],
        )
        if (currentHeading !== null) {
          if (isHeadingBelowTheTopOfThePage(currentHeading)) {
            //On natural scroll, user is scrolling up
            while (
              currentHeading !== null &&
              isHeadingBelowTheTopOfThePage(currentHeading) &&
              selectedIndex.current > 0
              ) {
              const prevHeading = editor.getElementByKey(
                tableOfContents[selectedIndex.current - 1][0],
              )
              if (
                prevHeading !== null &&
                (isHeadingAboveViewport(prevHeading) ||
                  isHeadingBelowTheTopOfThePage(prevHeading))
              ) {
                selectedIndex.current--
              }
              currentHeading = prevHeading
            }
            const prevHeadingKey = tableOfContents[selectedIndex.current][0]
            setSelectedKey(prevHeadingKey)
          } else if (isHeadingAboveViewport(currentHeading)) {
            //On natural scroll, user is scrolling down
            while (
              currentHeading !== null &&
              isHeadingAboveViewport(currentHeading) &&
              selectedIndex.current < tableOfContents.length - 1
              ) {
              const nextHeading = editor.getElementByKey(
                tableOfContents[selectedIndex.current + 1][0],
              )
              if (
                nextHeading !== null &&
                (isHeadingAtTheTopOfThePage(nextHeading) ||
                  isHeadingAboveViewport(nextHeading))
              ) {
                selectedIndex.current++
              }
              currentHeading = nextHeading
            }
            const nextHeadingKey = tableOfContents[selectedIndex.current][0]
            setSelectedKey(nextHeadingKey)
          }
        }
      } else {
        selectedIndex.current = 0
      }
    }

    let timerId: ReturnType<typeof setTimeout>

    function debounceFunction(func: (ev: Event) => void, delay: number) {
      return (ev: Event) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => func(ev), delay)
      }
    }

    function onScroll(this: Document, ev: Event): void {
      const target = ev.target as HTMLElement
      const lastScrollTop = scrollPosition.current.get(target) || 0
      if (target.scrollTop !== lastScrollTop) {
        scrollPosition.current.set(target, target.scrollTop)
        debounceFunction(scrollCallback, 10)(ev)
      }
    }

    if (scrollableElements.length > 0) {
      scrollableElements.forEach((element) => {
        scrollPosition.current.set(element, element.scrollTop)
        element.addEventListener('scroll', onScroll)
      })
    } else {
      document.addEventListener('scroll', onScroll)
    }
    return () => {
      if (scrollableElements.length > 0) {
        scrollableElements.forEach((element) => {
          element.removeEventListener('scroll', onScroll)
        })
      } else {
        document.removeEventListener('scroll', onScroll)
      }
    }
  }, [tableOfContents, editor])

  useEffect(() => {
    // Scroll tableOfContentsRef to the selected heading
    if (tableOfContentsRef.current) {
      const selectedHeading = tableOfContentsRef.current.querySelector(
        '.selected-heading-wrapper',
      )
      if (selectedHeading) {
        selectedHeading.scrollIntoView({
          behavior: 'instant',
          block: 'center',
        })
      }
    }
  }, [selectedKey])

  return (
    <div className="table-of-contents">
      <ul className="headings" ref={tableOfContentsRef}>
        {tableOfContents.map(([key, text, tag], index) => {
          if (index === 0) {
            return (
              <div className="normal-heading-wrapper" key={key}>
                <div
                  className="first-heading"
                  onClick={() => scrollToNode(key, index)}
                  role="button"
                  tabIndex={0}>
                  {('' + text).length > 20
                    ? text.substring(0, 20) + '...'
                    : text}
                </div>
                <br />
              </div>
            );
          } else {
            return (
              <div
                className={`normal-heading-wrapper ${
                  selectedKey === key ? 'selected-heading-wrapper' : ''
                }`}
                key={key}>
                <div
                  onClick={() => scrollToNode(key, index)}
                  role="button"
                  className={indent(tag)}
                  tabIndex={0}>
                  <li
                    className={`normal-heading ${
                      selectedKey === key ? 'selected-heading' : ''
                    }
                    `}>
                    {('' + text).length > 27
                      ? text.substring(0, 27) + '...'
                      : text}
                  </li>
                </div>
              </div>
            );
          }
        })}
      </ul>
    </div>
  )
}

export default function TableOfContentsPlugin() {
  return (
    <LexicalTableOfContentsPlugin>
      {(tableOfContents) => {
        return <TableOfContentsList tableOfContents={tableOfContents}/>
      }}
    </LexicalTableOfContentsPlugin>
  )
}