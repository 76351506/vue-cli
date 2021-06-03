## 下载依赖
由于vue-cli脚手架一直再更新，包括webpack及相关依赖都在升级，下面代码仅供参考<br />本人目前使用 **@vue/cli 4.5.9**, 下面是依赖包的版本号
```javascript
cnpm install postcss
cnpm install postcss-loader
cnpm install postcss-pxtorem
cnpm install autoprefix
```
方式一：vue.config.js
```javascript
const pxtorem = require('postcss-pxtorem');
module.exports = {
	css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 16, // 根字体大小，如果设计图是750的话 记得除2
            unitPrecision: 5,
            propList: ['*'], // 作用在哪些属性上 我这里用的是通配符
            selectorBlackList: ['vant-'], // 将哪些html元素排除在外，我这里添加了一个vant的
            replace: true,
            mediaQuery: false,
            minPixelValue: 12,
            exclude: /node_modules/i,
          }),
        ],
      },
    },
 }
}
```

<br />方式二：项目根目录添加.postcssrc.js
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 根字体大小，如果设计图是750的话 记得除2
      unitPrecision: 5,
      propList: ['*'], // 作用在哪些属性上 我这里用的是通配符
      selectorBlackList: ['vant-'], // 将哪些html元素排除在外，我这里添加了一个vant的
      replace: true,
      mediaQuery: false,
      minPixelValue: 12,
      exclude: /node_modules/i,
    },
  },
}
```


## 浏览器兼容前缀

<br />方式一：<br />项目根目录创建 vue.config.js
```json
{
	"browserslist": [
    "defaults",
    "not ie <= 8",
    "chrome >= 14"
  ]
}
```
项目根目录创建.postcssrc.js
```javascript
const autoprefixer = require('autoprefixer');

module.exports = {
	css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 自动添加兼容css前缀
          autoprefixer(),
        ],
      },
    },
 }
}
```
方式二：项目根目录添加.postcssrc.js<br />​<br />

1. 项目根目录创建 .browserslistrc
```json
defaults
not ie <= 8
chrome >= 14
```


2. 项目根目录创建.postcssrc.js
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
```


