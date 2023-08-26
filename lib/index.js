/**
 * @typedef {import('hast').Root} Root
 *
 * @typedef Options
 *   Configuration.
 * @property {number} shift
 *   Number to shift headings.
 */

import {shiftHeading} from 'hast-util-shift-heading'

/**
 * Plugin to change the rank (depth, level) of headings.
 *
 * @param {Options} options
 *   Configuration.
 * @returns
 *   Transform.
 */
export default function rehypeShiftHeading(options) {
  if (!options || !options.shift) {
    throw new Error('Missing required `shift` in options')
  }

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    shiftHeading(tree, options.shift)
  }
}
