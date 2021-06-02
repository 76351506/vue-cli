/*
 * @Author: heinan
 * @Date: 2021-06-02 11:57:29
 * @Last Modified by: heinan
 * @Last Modified time: 2021-06-02 11:57:55
 */

export function setCookie(key, val) {
  localStorage.setItem(key, val)
}
export function getCookie(key) {
  return localStorage.getItem(key)
}
