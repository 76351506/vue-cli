/*
 * @Author: heinan
 * @Date: 2021-06-02 08:47:04
 * @Last Modified by: heinan
 * @Last Modified time: 2021-06-02 10:52:34
 */

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('@/views/user/login'),
  },
  {
    path: '/user/registry',
    name: 'registry',
    component: () => import('@/views/user/registry'),
  },
]
export default routes
