/**
 * @typedef {import('hast').Root} Root
 *
 * @typedef Options
 *   Configuration.
 * @property {number | null | undefined} [shift]
 *   Number to shift headings (default: `0`).
 */

import {shiftHeading} from 'hast-util-shift-heading'

/** @type {Options} */
const emptyOptions = {}

/**
 * Plugin to change the rank (depth, level) of headings.
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
