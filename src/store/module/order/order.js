import {
  getOrderList,
  getProduceDetail,
  getOrderDetail
} from '@/api/order/order.js'
import Constant from '../../../Constant'
export default {
  namespaced: true,
  state: {
    orderlist: [],
    producelist:[],
    orderdetail:{}
  },

  mutations: {
    [Constant.INITIALIZE_ORDERLIST]: (state, payload) => {
      state.orderlist = payload
    },
    [Constant.INITIALIZE_ORDERPRODUCELIST]: (state, payload) => {
      state.producelist = payload
    },
    [Constant.INITIALIZE_ORDERDETAIL] : (state, payload) => {
      state.orderdetail = payload
    },
  },
  actions: {
    getOrderListAction (state, params) {
      return new Promise((resolve, reject) => {
        getOrderList(params).then(res => {
          state.commit(Constant.INITIALIZE_ORDERLIST, res.data.data)
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getProduceDetailAction (state, orderid) {
      return new Promise((resolve, reject) => {
        getProduceDetail(orderid).then(res => {
          state.commit(Constant.INITIALIZE_ORDERPRODUCELIST, res.data.data)
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getOrderDetailAction (state, orderid) {
      return new Promise((resolve, reject) => {
        getOrderDetail(orderid).then(res => {
          state.commit(Constant.INITIALIZE_ORDERDETAIL, res.data.data)
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
  getters: {

  }
}

