<template>
    <div class="wrapper">
        <router-view class="mainRouterView"></router-view>
        <div class="bottomDiv">
            <div class="routeBt" v-for="(item,index) in bottomBtData" @click="jumpTaber(item)">
                <image class="tabberIcon" :src="item.imgSrc"></image>
                <text :class="[item.selected ? 'bottomTitleSelected' : 'bottomTitle']" ref="tab1">{{item.title}}</text>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {

    }
    .mainRouterView{

        flex: 1;
    }
    .bottomDiv{
        border-top-width: 2px;
        border-color: lightgray;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        height: 100px;
    }
    .routeBt{
        flex: 1;
        background-color: white;

        border-color: lightgray;
        border-right-width: 2px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tabberIcon{

        width: 40px;
        height:40px;
    }
    .bottomTitle{

        margin-top: 12px;
        color: #444444;
        font-size: 27px;
    }
    .bottomTitleSelected{

        margin-top: 12px;
        color: #0fd3a1;
        font-size: 27px;
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
                    {title:'推荐',selected:true,imgSrc:"http://www.easyicon.net/api/resizeApi.php?id=1206034&size=128",router:'/'},
                    {title:'项目',selected:false,imgSrc:"http://www.easyicon.net/api/resizeApi.php?id=1206032&size=128",router:'homeLogin'},
                    {title:'用户',selected:false,imgSrc:"http://www.easyicon.net/api/resizeApi.php?id=1206028&size=128",router:'uct'},
                    {title:'更多',selected:false,imgSrc:"http://www.easyicon.net/api/resizeApi.php?id=1206003&size=128",router:'more'}
                ],
                tabSelected: 3,
            }
        },
        methods: {

            jumpTaber(item){

                this.jump(item.router);
                for (var i=0; i < 4;i++){

                    this.$data.bottomBtData[i].selected = false;
                }

                item.selected = true;
            }
        },
        components: {

            'bottomBt':bottomBt
        }
    }
</script>

