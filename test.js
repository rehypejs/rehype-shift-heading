import assert from 'node:assert/strict'
import test from 'node:test'
import {rehype} from 'rehype'
import rehypeShiftHeading from './index.js'

test('rehypeShiftHeading', async function (t) {
  await t.test('should throw w/o `options.shift`', async function () {
    try {
      // @ts-expect-error: check how missing `options.shift` is handled.
      await rehype().use(rehypeShiftHeading).process('<h2>a</h2>')
    } catch (error) {
      assert.match(String(error), /Error: Missing required `shift` in options/)
      return
    }

    assert.fail()
  })

  await t.test('should shift (positive)', async function () {
    assert.equal(
      String(
        await rehype().use(rehypeShiftHeading, {shift: 1}).process('<h2>a</h2>')
      ),
      '<html><head></head><body><h3>a</h3></body></html>'
    )
  })

  await t.test('should shift (negative)', async function () {
    assert.equal(
      String(
        await rehype()
          .use(rehypeShiftHeading, {shift: -1})
          .process('<h2>a</h2>')
      ),
      '<html><head></head><body><h1>a</h1></body></html>'
    )
  })

  await t.test('should not shift past `h6`', async function () {
    assert.equal(
      String(
        await rehype().use(rehypeShiftHeading, {shift: 6}).process('<h2>a</h2>')
      ),
      '<html><head></head><body><h6>a</h6></body></html>'
    )
  })

  await t.test('should not shift past `h1`', async function () {
    assert.equal(
      String(
        await rehype()
          .use(rehypeShiftHeading, {shift: -2})
          .process('<h2>a</h2>')
      ),
      '<html><head></head><body><h1>a</h1></body></html>'
    )
  })
})
