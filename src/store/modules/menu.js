const state = function() {
    return {
        menuName: 'data'
    }
}
const mutations = {
    setMenuName(state, name) {
        state.menuName = name;
    }
}

const actions = {
    changeCartIndex(context) {

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}