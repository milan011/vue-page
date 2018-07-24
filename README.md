# vue-page

> vue-init 模版

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Featrues

```
1、normalize.css、scss、打包去注释、打包去sourceMap、打包添加gzip，这些开包即用，无需配置。

2、支持同一无线网下移动端调试，在浏览器输入本机ip发送给移动端即可。

3、支持图片快速引入，引入方法为：@import '@assets/你的图片路径'。

4、支持多语言切换，自带vue-i18n，只需要在i18n的lang文件下添加对应的语言包，并添加依赖即可。

5、组件（components）、布局（container）、页面（pages）搭配优化，提高编写效率，降低维护难度。

6、一键提交。项目根目录下运行 ./push.sh 即可（需先进行权限操作，运行 chmod 755 push.sh）。

7、内置Element-ui，同样支持国际化配置，支持按需引入和全量引入的国际化，只需跟换main.js引入i18n的目录位置即可：
     |
     |- 全量引入Element-ui使用 import i18n from './i18n/i18n';
     |
     |- 按需引入Element-ui使用 import i18n from './i18n/i18n-el-need'; 同时main.js和.babellrc中参照Element-ui文档进行按需引入配置
     |
(添加时间：2018.07.16)

8、封装axios请求（2018.07.19 -> 2018.07.24）

```
