# visible-element
> Visible element with animation.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/visible-element
```

## usage
```js
import VisibleElement, { VisibleState } from '@jswork/visible-element';

const el = document.getElementById('#dialog1');
const ve = new VisibleElement(el, {
  onChange: (state: VisibleState) => {
    console.log('state:', state);
  }
});

// methods: show, close, toggle, to
ve.show();
ve.close();
ve.toggle();
ve.to(true);
```

## license
Code released under [the MIT license](https://github.com/afeiship/visible-element/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/visible-element
[version-url]: https://npmjs.org/package/@jswork/visible-element

[license-image]: https://img.shields.io/npm/l/@jswork/visible-element
[license-url]: https://github.com/afeiship/visible-element/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/visible-element
[size-url]: https://github.com/afeiship/visible-element/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/visible-element
[download-url]: https://www.npmjs.com/package/@jswork/visible-element
