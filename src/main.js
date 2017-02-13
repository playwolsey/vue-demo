import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件
const Help = {
    template: '<div><h2>我是帮助页面。</h2></div>'
}

import Home from './components/home.vue'
import Login from './components/login.vue'
import Book from './components/book.vue'
import Movie from './components/movie.vue'
import NotFound from './components/notFound.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/books',
        component: Book
    }, {
        path: '/movies',
        component: Movie
    }, {
        path: '/help',
        component: Help
    }, {
        path: '*',
        component: NotFound
    }]
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
