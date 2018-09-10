import http from './ajax'
export default {
    install: function (Vue, name = '$http') {
        Object.defineProperty(Vue.prototype, name, { value: http });
    }
}