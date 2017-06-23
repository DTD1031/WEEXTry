//导入模块
import VueRouter from 'vue-router'

//导入使用的组件
import home from'../Home/home.vue'
import uct from '../Ucenter/Ucenter.vue'

Vue.use(VueRouter)

//创建路由对象
export default new VueRouter({

    //mode: 'abstract',//weex 中只能使用 abstract 类型 默认可以不写 系统会自动设置为abstract
    routes:[

        {path:'/home',name:'home',component: home},
        {path:'/uct',name:'uct',component: uct}

        // {path:'/messages',component:messages}

    ]

})