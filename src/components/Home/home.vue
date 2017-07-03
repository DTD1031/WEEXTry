<template>
    <div class="homeMain">
        <!--header-->
        <div class="homeHeader">
            <div class="searchBt">
                <text style="color:white;font-size: 20px" @click="checkout">{{count}}</text>
            </div>
            <input class="searchInput"/>
        </div>
        <!--body-->
        <scroller class="bodyScroller">
            <!--headRefresh-->
            <refresh class="refreshDiv" @refresh="nnn" :display="refreshing ? 'show' : 'hide'">
                <text class="refreshText">it's refresh</text>
            </refresh>
            <!--login-->
            <slider class="slider" interval="2000" auto-play="true">
                <div class="frame" v-for="item in imageList">
                    <image class="image" resize="stretch" :src="item.src"></image>
                </div>
            </slider>
            <!--login-->
            <div class="loginView">
                <image style="width: 80px;height: 80px;margin-left: 30px;margin-right: 50px" src="https://m.zhelitou.com.cn/images/up.png"></image>
                <slider class="homeDataSlider" interval="2000" auto-play="true">
                    <div class="homeDataSliderDiv" v-for="item in sliderData">
                        <text class="homeDataSliderTitle">{{item.title}}</text>
                        <text class="homeDataSliderNum">{{item.num}}</text>
                    </div>
                </slider>
                <div class="loginBt" @click="goToLogin">
                    <text style="color: white;font-weight: bold">登录</text>
                </div>
            </div>
            <div class="itemList" v-for="item in bass">
                <homeCell class="cell">{{item}}</homeCell>
            </div>
            <loading>
                <text>load more...</text>
            </loading>
        </scroller>
    </div>
</template>


<style>
    .homeMain{

        background-color: #afddff;
    }
    .homeHeader{
        background-color: #0088fb;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

    }
    .searchInput{

        flex: 4;
        margin-right: 10%;
        background-color: white;
        height: 60px;
    }
    .searchBt{
        flex: 1;
        margin-left: 10%;
        height: 60px;
        background-color: darkblue;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

    }
    .bodyScroller{

        display: flex;
        background-color: #afddff;

        flex-direction: column;
        align-items: stretch;
    }
    .slider{

        height: 400px;

    }
    .image{

        height: 400px;
        width: 750px;
    }
    .loginView {

        margin-top: 6px;
        height: 130px;
        background-color: white;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }

    .homeDataSlider{

        width: 400px;
        height: 100px;

    }
    .homeDataSliderDiv{


        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

    }
    .homeDataSliderTitle{


        color: lightgray;
        font-size: 30px;
    }
    .homeDataSliderNum{


        font-size: 44px;
        color: #fd9231;
        font-weight: 500;

    }
    .loginBt{

        width: 240px;
        height: 70px;
        margin-right: 30px;

        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    .refreshDiv{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #afddff;
    }
    .refreshText{

        color: #888888;
        font-size: 42px;
        text-align: center;
    }
    .itemList{

    }
    .cell{
        padding-left: 10px;
        padding-right: 10px;
        padding-top:5px;
        padding-bottom: 0px;
        height: 400px;
    }
</style>

<script type="text/ecmascript-6">

    import homeCell from "./homeCell.vue"
    const modal = weex.requireModule('modal')

    export default {
        name: 'home',
        data () {
            return {
                bass:['1','2','3','4','5','6','7'],
                sliderData:[
                    {title:'累计盘活金额',num:'43000'},
                    {title:'累计注册人数',num:'99900'},
                    {title:'累计投资金额',num:'11111'},
                ],
                count:1,
                imageList: [
                    { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=430472977,3630340535&fm=26&gp=0.jpg'},
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498563839597&di=1ec085a5d860f9ba6b2c339454b7bbf3&imgtype=0&src=http%3A%2F%2Fimg.newyx.net%2Fnewspic%2Fimage%2F201411%2F15%2F153d372e1f.jpg'},
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498563839593&di=2521ed845a7dc572f1d5e270bb0e362f&imgtype=0&src=http%3A%2F%2Fow.replays.net%2Fuploads%2Fremote%2F24861464934623.jpg'}
                ],
                refreshing:true
            }
        },
        methods:{

            myResfresh (event) {
                this.$data.count ++;
                console.log('is refreshing')
                modal.toast({ message: 'refresh', duration: 1 })
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
            },
            nnn (even) {

                this.$data.count ++;
                this.$data.refreshing = true

            },

            pulling (even) {

                this.$data.count ++;
            },

            checkout (even){

                this.$data.count = 0;
            },
            goToLogin (even){

                this.$data.count = 999;
                this.jump('/login');
            }
        },
        components:{

            "homeCell":homeCell
        }
    }
</script>
