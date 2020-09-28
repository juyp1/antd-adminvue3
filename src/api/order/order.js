import axios from '@/libs/api.request'

// 订单管理
export const getOrderList = (params) => {
  return axios.request({
    url: '/pc/cloud/order/list',
    params,
    method: 'get'
  })
}

//子单详情
export const getProduceDetail = (orderid) => {
  return axios.request({
    url: `/pc/cloud/order/producedetail?orderid=${orderid}`,
    method: 'get'
  })
}

// 主单详情
export const getOrderDetail = (orderid) => {
  return axios.request({
    url: `/pc/cloud/order/orderinfo?orderid=${orderid}`,
    method: 'get'
  })
}