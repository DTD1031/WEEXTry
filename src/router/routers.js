//导入模块
import VueRouter from 'vue-router'

//导入使用的组件
import home from'../components/Home/home.vue'
import uct from '../components/Ucenter/Ucenter.vue'
import more from '../components/More/more.vue'
import moreNews from '../components/More/moreNews.vue'
import moreMsg from '../components/More/moreMsg.vue'
import login from '../components/Home/Login.vue'

Vue.use(VueRouter)

//创建路由对象
export default new VueRouter({

    //mode: 'abstract',//weex 中只能使用 abstract 类型 默认可以不写 系统会自动设置为abstract
    routes:[

        {path:'/home',name:'home',component: home},
        {path:'/uct',name:'uct',component: login},
        {path:'/more',name:'more',component: more,
            children:[{path:'',name:'moreNews',component:moreNews},
                      {path:'Msg',name:'moreMsg',component:moreMsg}]
        },
        {path:'/login',name:'login',component:login}
    ]

})