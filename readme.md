# rehype-shift-heading

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[rehype][]** plugin to change the rank of headings.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(rehypeShiftHeading[, options])`](#unifieduserehypeshiftheading-options)
    *   [`Options`](#options)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([rehype][]) plugin to change the rank (also known
as depth or level) of headings (so `<h1>` through `<h6>`).
You can increase (by passing a positive number) or decrease (negative number)
all headings.

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**rehype** adds support for HTML to unified.
**hast** is the HTML AST that rehype uses.
This is a rehype plugin that changes headings in the tree.

## When should I use this?

This plugin is particularly useful when merging documents into each other.
For example, when injecting a `readme.md` that starts with an `<h1>` into a
site that uses an `<h1>` for the title of the website.
This plugin can be used to shift all the headings inside the readme.

This plugin is built on [`hast-util-shift-heading`][hast-util-shift-heading],
which does the work on syntax trees.
rehype focusses on making it easier to transform content by abstracting such
internals away.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install rehype-shift-heading
```

In Deno with [`esm.sh`][esmsh]:

```js
import rehypeShiftHeading from 'https://esm.sh/rehype-shift-heading@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import rehypeShiftHeading from 'https://esm.sh/rehype-shift-heading@1?bundle'
</script>
```

## Use

Say our module `example.js` looks as follows:

```js
import {rehype} from 'rehype'
import rehypeShiftHeading from 'rehype-shift-heading'

const file = await rehype()
  .data('settings', {fragment: true})
  .use(rehypeShiftHeading, {shift: 1})
  .process('<h1>Alpha!</h1>')

console.log(String(file))
```

Now, running `node example` yields:

```html
<h2>Alpha!</h2>
```

## API

This package exports no identifiers.
The default export is [`rehypeShiftHeading`][api-rehype-shift-heading].

### `unified().use(rehypeShiftHeading[, options])`

Change the rank (depth, level) of headings.

Does not shift past `h1` and `h6`.

###### Parameters

*   `options` ([`Options`][api-options], optional)
    — configuration

###### Returns

Transform ([`Transformer`][unified-transformer]).

### `Options`

Configuration (TypeScript type).

###### Fields

*   `shift` (`number`, default: `0`)
    — number to shift headings; can be negative to decrease heading levels

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Options`][api-options].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `rehype-shift-heading@^2`,
compatible with Node.js 16.

This plugin works with `rehype-parse` version 1+, `rehype-stringify` version 1+,
`rehype` version 1+, and `unified` version 4+.

## Security

Use of `rehype-shift-heading` is safe.

## Related

*   [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
    — add `id`s to headings
*   [`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings)
    — add links to headings

## Contribute

See [`contributing.md`][contributing] in [`rehypejs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/rehypejs/rehype-shift-heading/workflows/main/badge.svg

[build]: https://github.com/rehypejs/rehype-shift-heading/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/rehypejs/rehype-shift-heading.svg

[coverage]: https://codecov.io/github/rehypejs/rehype-shift-heading

[downloads-badge]: https://img.shields.io/npm/dm/rehype-shift-heading.svg

[downloads]: https://www.npmjs.com/package/rehype-shift-heading

[size-badge]: https://img.shields.io/bundlejs/size/rehype-shift-heading

[size]: https://bundlejs.com/?q=rehype-shift-heading

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/rehypejs/rehype/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/HEAD/contributing.md

[support]: https://github.com/rehypejs/.github/blob/HEAD/support.md

[coc]: https://github.com/rehypejs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[typescript]: https://www.typescriptlang.org

[rehype]: https://github.com/rehypejs/rehype

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified?tab=readme-ov-file#transformer

[hast-util-shift-heading]: https://github.com/syntax-tree/hast-util-shift-heading

[api-options]: #options

[api-rehype-shift-heading]: #unifieduserehypeshiftheading-options
