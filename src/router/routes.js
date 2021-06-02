/*
 * @Author: heinan
 * @Date: 2021-06-02 08:47:04
 * @Last Modified by: heinan
 * @Last Modified time: 2021-06-02 08:47:30
 */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
]
export default routes
