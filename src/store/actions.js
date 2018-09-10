
import http from "../plugin/ajax/ajax"
export default {
	fetchItem({ commit }) {
		http.get("/api/client/merchant/info/11209")
			.then(data => {
				if (data.status == 'ok') {
					commit('setItem', data.data.merchant)
				}
			}).catch(err => {
				console.log(err)
			})
	},
	fetchItem1({ commit }) {
		http.get("/api/client/merchant/info/11209")
			.then(data => {
				if (data.status == 'ok') {
					commit('setItem1', data.data.merchant)
				}
			}).catch(err => {
				console.log(err)
			})
	}
}