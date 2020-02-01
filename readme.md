# cb-user-list

一个web-component的例子，其中使用了redux和redux-thunk。可以在react和vuejs应用程序中使用。
本例主要在于实践web component的跨框架能力，使用redux主要方便在复杂项目中进行状态和数据响应的管理。

<img src="https://github.com/y00rb/cb-user-list/raw/master/cb-user-list.png"><img>
主要功能通过redux进行input的value的修改和显示。

## release as npm
```
npm run build
```

```
npm publish
```

## 在vuejs 和 react 中使用
### Installation
```
yarn add cb-user-list
```
### 在react中使用

1. 在`./src/index.js` 中加载和注册使用web component
```
import { applyPolyfills, defineCustomElements } from 'cb-user-list/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```
2. 在template中使用web component
在`./src/App.js`中 import 要使用的web-component
```
import 'cb-user-list/';
```
然后在render的JSX中添加web component的consume code
```
<my-component></my-component>
```

### 在vuejs中使用

1. 在`./src/main.js` 中加载和注册使用web component
```
import { applyPolyfills, defineCustomElements } from 'cb-user-list/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

2. 在template中使用web component
可以直接在vue的component中添加web component的consume code
```
<my-component></my-component>
```