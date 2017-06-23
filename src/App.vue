<template>
  <div class="wrapper">

      <router-view style="flex: 1"></router-view>
      <div class="bottomDiv">
          <div class="routeBt" @click="jump('/home')">
              <text class="bottomTitle">首页</text>
          </div>
          <div class="routeBt" @click="jump('/uct')">
              <text class="bottomTitle">项目列表</text>
          </div>
          <div class="routeBt" @click="jump('/home')">
              <text class="bottomTitle" >我</text>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

  }
  .bottomDiv{

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;

      height: 100px;
  }
  .routeBt{

      flex:1;
      background-color: #0088fb;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .bottomTitle{

      color: white;
      height: 50px;
      font-size: 40px;
  }
</style>

<script>
  import bottomBt from "./bottomBt.vue"
  import home from "./Home/home.vue"
  import uct from "./Ucenter/Ucenter.vue"

  export default new Vue({

    data() {
        return {

            logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
            target: 'World',
            bottomTitle:['首页','用户中心','页面3']
        }
    },
    methods: {


      },
      components:{

          "bottomBt":bottomBt,
          "uct":uct,
          "home":home
      }

  })
</script>
