 import axios from '@/libs/api.request'
// 登录
export const signinUser=(data)=>{
  return axios.request({
    url: '/pc/lg',
    data,
    method: 'post'
  })
}