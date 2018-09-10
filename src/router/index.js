
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {
                path: '/comp1',
                component: () => import('../views/comp1.vue')
            },
            {
                path: '/comp2',
                component: resolve => require.ensure([], () => resolve(require("../views/comp2.vue")), 'comp2'),
            },
            { path: '/', redirect: '/comp1' }
        ]
    })
}