<template>
    <div class="homeMain">
        <!--header-->
        <div class="homeHeader">
            <image class="homeHeadButton" style="margin-left: 30px" src="https://m.zhelitou.com.cn/images/message.png"></image>
            <text style="flex: 1;text-align: center;color: #fc5164;font-size: 40px;font-weight: bold">浙里投</text>
            <image class="homeHeadButton" style="margin-right: 30px" src="https://m.zhelitou.com.cn/images/index_tel.png"></image>
        </div>
        <!--body-->
        <scroller class="bodyScroller">
            <!--headRefresh-->
            <refresh class="refreshDiv" @refresh="getListData()">
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
            <div v-if="!ListData" class="loadingView">
                <text>正在加载中……</text>
            </div>
            <div v-else class="itemList" v-for="item in ListData">
                <homeCell class="cell"
                          :item="item"
                >{{item}}</homeCell>
            </div>
            <div style="height: 50px"></div>
        </scroller>
    </div>
</template>

<script type="text/ecmascript-6">

    import homeCell from "./homeCell.vue"
    const modal = weex.requireModule('modal');
    import api from '../../commons/api'
    import {get_items_from_result} from '../../commons/jsonutil'

    export default {
        name: 'home',
        data () {
            return {
                ListData:[],
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

            goToLogin (even){

                this.jump('/login');
            },
            getListData(){


                console.log("I'm refreshing...");
                this.$data.ListData = [];
                api.get_recommend_projects(this.dataHandle);
            },
            dataHandle(response){

                console.log(response);
                if (response.ok){
                    //网络请求成功
                    var items = get_items_from_result(response.data);
                    if (items){
                        //数据获取成功
                        this.$data.ListData = items;
                    }else {

                        //数据获取失败
                    }

                }else {
                    //网络请求失败

                }
            }
        },
        created () {

            this.getListData();
        },
        components:{

            "homeCell":homeCell
        }
    }
</script>


<style>
    .homeMain{

        background-color: lightgray;
    }
    .homeHeader{
        background-color: white;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

    }
    .homeHeadButton{

        width: 80px;
        height: 80px;
    }
    .bodyScroller{

        display: flex;
        background-color: lightgray;

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

        width: 750px;
        height: 100px;
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
    .loadingView{

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
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