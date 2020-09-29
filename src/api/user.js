 import axios from '@/libs/api.request'
// 登录
export const signinUser=(data)=>{
  return axios.request({
    url: '/pc/lg',
    data,
    method: 'post'
  })
}

// 获取权限
export const getUserInfo=(token)=>{
  return axios.request({
    url: `/pc/info?token=${token}`,
    method: 'get'
  })
}