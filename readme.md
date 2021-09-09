# rehype-shift-heading

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**rehype**][rehype] plugin to change the rank (depth, level) of headings.

## Contents

*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(rehypeShiftHeading, options)`](#unifieduserehypeshiftheading-options)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install rehype-shift-heading
```

## Use

Say `example.js` looks as follows:

```js
import {rehype} from 'rehype'
import rehypeShiftHeading from 'rehype-shift-heading'

rehype()
  .data('settings', {fragment: true})
  .use(rehypeShiftHeading, {shift: 1})
  .process('<h1>Alpha!</h1>')
  .then((file) => {
    console.log(String(file))
  })
```

Now, running `node example` yields:

```html
<h2>Alpha!</h2>
```

## API

This package exports no identifiers.
The default export is `rehypeShiftHeading`.

### `unified().use(rehypeShiftHeading, options)`

rehype plugin to change the rank (depth, level) of headings.
Does not shift past `h1` and `h6`.

##### `options.shift`

Number to shift headings (`number`, required).
Can be negative to decrease heading levels.

## Security

Use of `rehype-shift-heading` is safe.

## Related

*   [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
    — Add `id` attributes to headings
*   [`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings)
    — Add links to headings in HTML

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

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-shift-heading.svg

[size]: https://bundlephobia.com/result?p=rehype-shift-heading

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/rehypejs/rehype/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/HEAD/contributing.md

[support]: https://github.com/rehypejs/.github/blob/HEAD/support.md

[coc]: https://github.com/rehypejs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[rehype]: https://github.com/rehypejs/rehype
