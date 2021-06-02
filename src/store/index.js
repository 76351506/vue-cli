/*
 * @Author: heinan
 * @Date: 2021-06-02 08:56:42
 * @Last Modified by: heinan
 * @Last Modified time: 2021-06-02 09:17:20
 */
import { createStore } from 'vuex'

const context = require.context('./model', false, /\.js$/)
//通过context.keys()获取model目录下面的文件名
//遍历文件名，获取文件内容，返回个数组
const getModel = context.keys().map(key => context(key))

const createModel = function () {
  const modules = {}
  //遍历获取到的model数组集合,分别将每一个model绑定到 app.model()
  getModel.forEach(model => {
    modules[model.default['namespace']] = model.default
  })
  return modules
}

export default createStore({
  strict: true,
  modules: createModel(),
})
