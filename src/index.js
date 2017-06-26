
import app from './App.vue'
import router from './router/routers.js'  //导入路由文件
import minix from './mixins/index.js'

app.el='#root'

app.router=router  //给根组件设置路由

Vue.mixin(minix);

export default new Vue(app);  //创建vue对象

router.push('/home')  //指定一个路由入口（初始显示的页面内容）