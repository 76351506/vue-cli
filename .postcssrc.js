module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75, // 根字体大小，如果设计图是750的话 记得除2
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
