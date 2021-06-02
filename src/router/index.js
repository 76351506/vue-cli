/*
 * @Author: heinan
 * @Date: 2021-06-02 08:48:10
 * @Last Modified by:   heinan
 * @Last Modified time: 2021-06-02 08:48:10
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
