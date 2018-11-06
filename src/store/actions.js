
import http from "../plugin/ajax/ajax"
export default {
	fetchItem({ commit }) {
		http.get("/api/client/merchant/info/11209")
			.then(data => {
				if (data.status == 'ok') {
					commit('setItem', data.data.merchant)
				}
			}).catch(err => {
			})
	}
}