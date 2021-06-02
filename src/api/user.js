import axios from 'axios'

export function _userLogin(account) {
  const url = '/api/user/login'
  return axios.post(url, account)
}
