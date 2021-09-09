import test from 'tape'
import {rehype} from 'rehype'
import rehypeShiftHeading from './index.js'

test('rehypeShiftHeading', async (t) => {
  try {
    // @ts-expect-error: `options.shift` missing
    await rehype().use(rehypeShiftHeading).process('<h2>a</h2>')
    t.fail()
  } catch (error) {
    t.match(
      String(error),
      /Error: Missing required `shift` in options/,
      'should throw w/o `options.shift`'
    )
  }

  t.equal(
    String(
      await rehype().use(rehypeShiftHeading, {shift: 1}).process('<h2>a</h2>')
    ),
    '<html><head></head><body><h3>a</h3></body></html>',
    'should shift (positive)'
  )

  t.equal(
    String(
      await rehype().use(rehypeShiftHeading, {shift: -1}).process('<h2>a</h2>')
    ),
    '<html><head></head><body><h1>a</h1></body></html>',
    'should shift (negative)'
  )

  t.equal(
    String(
      await rehype().use(rehypeShiftHeading, {shift: 6}).process('<h2>a</h2>')
    ),
    '<html><head></head><body><h6>a</h6></body></html>',
    'should not shift past `h6`'
  )

  t.equal(
    String(
      await rehype().use(rehypeShiftHeading, {shift: -2}).process('<h2>a</h2>')
    ),
    '<html><head></head><body><h1>a</h1></body></html>',
    'should not shift past `h1`'
  )

  t.end()
})
