import {
	getUserList,
	signinUser,
	getUserInfo,
} from '@/api/user.js'
import Constant from '../../../Constant'
export default {
	namespaced: true,
	state: {
		users: [],
		result: {},
		userFunc:''
	},

	mutations: {
		[Constant.INITIALIZE_LIST]: (state, payload) => {
			state.users = payload
		},
		[Constant.USER_SIGNIN]: (state, payload) => {
			state.result = payload
		},
		[Constant.USER_TOKEN]: (state, payload) => {
	
			localStorage.setItem('userFunc',payload)
		 
		 
		
		},
	},
	actions: {
		getUserListAction (state, params) {
			return new Promise((resolve, reject) => {
				getUserList(params).then(res => {
					state.commit(Constant.INITIALIZE_LIST, res.data.data)
					resolve(res.data)

				}).catch(err => {
					reject(err)
				})
			})
		},
		signinUserAction (state, data) {
			return new Promise((resolve, reject) => {
				signinUser(data).then(res => {
					state.commit(Constant.USER_SIGNIN, res.data.data)
					resolve(res.data)
				}).catch(err => {
					reject(err)
				})
			})
		},
		getUserInfoAction (state, token) {
			return new Promise((resolve, reject) => {
				getUserInfo(token).then(res => {
					state.commit(Constant.USER_TOKEN, res.data.functionlist)
					resolve(res.data)
				}).catch(err => {
					reject(err)
				})
			})
		}
	},
	getters: {

	}
}


// const inorder = (root)=>{
// 	if(!root) return 
// 	const statck = []
// 	let p = root;
// 	while (p||statck.length) {
// 		while (p) {
// 			statck.push(p)
// 			p = p.left
// 		}
// 		const n = stack.pop()
//     console.log(n.val)
// 		p = p.right;
// 	}
// }