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
 * @type {import('unified').Plugin<[Options], Root>}
 */
export default function rehypeShiftHeading(options) {
  if (!options || !options.shift) {
    throw new Error('Missing required `shift` in options')
  }

  return (tree) => {
    shiftHeading(tree, options.shift)
  }
}
