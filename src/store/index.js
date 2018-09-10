import vue from "vue"
import vuex from "vuex"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

vue.use(vuex)

export function createStore () {
  return new vuex.Store({
    state,
    mutations,
    actions
  })
}