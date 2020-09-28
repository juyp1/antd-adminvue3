import Vuex from 'vuex'
import user from './module/user/user.js'
import order from './module/order/order.js'
export default Vuex.createStore({
  state: {
    count:1
  },
  mutations: {
    inc(state){
      state.count++;
    }
  },
  actions: {
    
  },
  modules: {
    user,
    order
  }
});
