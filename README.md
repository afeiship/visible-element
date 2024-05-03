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
```html
<div id="my-element" data-visible="false"></div>
<button id="my-button">Toggle</button>
```
```css
[hidden] {
  display: none;
}

#my-element {
  animation: show 0.3s ease-in-out;
}

#my-element[data-visible="true"] {
  animation: close 0.3s ease-in-out;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes close {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

```javascript
import VisibleElement from 'visible-element';
const element = document.getElementById('my-element');
const button = document.getElementById('my-button');
const visible = new VisibleElement(element, {
  onShow: () => { console.log('show'); },
  onShowed: () => { console.log('showed'); },
  onClose: () => { console.log('close'); },
  onClosed: () => { console.log('closed'); },
  onChange: (status) => { console.log(status); },
});
button.addEventListener('click', () => {
  visible.toggle();
});
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
