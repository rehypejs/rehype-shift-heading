/**
 * @typedef {import('hast').Root} Root
 *
 * @typedef Options
 *   Configuration.
 * @property {number | null | undefined} [shift=0]
 *   Number to shift headings (default: `0`); can be negative to decrease
 *   heading levels.
 */

import {shiftHeading} from 'hast-util-shift-heading'

/** @type {Options} */
const emptyOptions = {}

/**
 * Change the rank (depth, level) of headings.
 *
 * Does not shift past `h1` and `h6`.
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function rehypeShiftHeading(options) {
  const shift = (options || emptyOptions).shift || 0

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    if (shift) {
      shiftHeading(tree, shift)
    }
  }
}
