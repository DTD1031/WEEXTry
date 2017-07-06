<template>
    <div class="wrapper">
        <router-view class="mainRouterView"></router-view>
        <div class="bottomDiv" style="height:96px;">
            <div class="routeBt" style="height:96px;" v-for="(item,index) in bottomBtData" @click="jumpTaber(item)">
                <image style="width: 176px;height:96px;" :src="$store.getters.activedTabIndex==item.index?item.activedImgSrc:item.imgSrc"></image>
            </div>


        </div>

    </div>

</template>

<style>
    .wrapper {

    }
    .mainRouterView{

        flex: 1;

    }
    .bottomDiv{
        border-top-width: 2px;
        border-top-color:#919191;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        height: 108px;


        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
    .routeBt{


        border-right-width:0px !important;

        flex: 1;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<script>

    import bottomBt from './components/bottomBt.vue'

    export default{

        data() {
            return {

                logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
                target: 'World',
                bottomBtData:[
//                    {title:'推荐',index:0,selected:this.$store.getters.activedTabIndex==0,imgSrc:this.$store.getters.activedTabIndex==0?"https://m.zhelitou.com.cn/images/home_active.png":"https://m.zhelitou.com.cn/images/home.png",router:'/'},
//                    {title:'项目',index:1,selected:this.$store.getters.activedTabIndex==1,imgSrc:this.$store.getters.activedTabIndex==1?"https://m.zhelitou.com.cn/images/pro_active.png":"https://m.zhelitou.com.cn/images/pro.png",router:'project'},
//                    {title:'用户',index:2,selected:this.$store.getters.activedTabIndex==2,imgSrc:this.$store.getters.activedTabIndex==2?"https://m.zhelitou.com.cn/images/account_active.png":"https://m.zhelitou.com.cn/images/account.png",router:'uct'},
//                    {title:'更多',index:3,selected:this.$store.getters.activedTabIndex==3,imgSrc:this.$store.getters.activedTabIndex==3?"https://m.zhelitou.com.cn/images/more_active.png":"https://m.zhelitou.com.cn/images/more.png",router:'more'}

                    {title:'推荐',index:0,activedImgSrc:"https://m.zhelitou.com.cn/images/home_active.png",imgSrc:"https://m.zhelitou.com.cn/images/home.png",router:'/'},
                    {title:'项目',index:1,activedImgSrc:"https://m.zhelitou.com.cn/images/pro_active.png",imgSrc:"https://m.zhelitou.com.cn/images/pro.png",router:'project'},
                    {title:'用户',index:2,activedImgSrc:"https://m.zhelitou.com.cn/images/acount_active.png",imgSrc:"https://m.zhelitou.com.cn/images/acount.png",router:'uct'},
                    {title:'更多',index:3,activedImgSrc:"https://m.zhelitou.com.cn/images/more_active.png",imgSrc:"https://m.zhelitou.com.cn/images/more.png",router:'more'}
                ]
            }
        },
        methods: {
            jumpTaber(item){
                if(item.index == 2 && !this.$store.getters.userinfo.username){
                    this.jump('/login');
                    return;
                }
                this.$store.commit('setActivedTabIndex',item.index);
                this.jump(item.router);
//                for (var i=0; i < 4;i++){
//
//                    this.$data.bottomBtData[i].selected = false;
//                }
//
//                item.selected = true;
            }
        }
    }


//    exports.setActivedTabIndex=function(index){
////        default.data.activedTabIndex=index;
//    }


</script>

