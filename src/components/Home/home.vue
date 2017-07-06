<template>
    <div class="homeMain">
        <!--header-->
        <div class="homeHeader">
            <image class="homeHeadButton" style="margin-left: 30px" src="https://m.zhelitou.com.cn/images/message.png"></image>
            <text style="flex: 1;text-align: center;color: #fc5164;font-size: 40px;font-weight: bold">浙里投</text>
            <image class="homeHeadButton" style="margin-right: 30px" src="https://m.zhelitou.com.cn/images/index_tel.png"></image>
        </div>
        <!--bodyd-->
        <!--a1-->
        <scroller class="bodyScroller" ref="homeScroll">
            <!--headRefresh-->
            <refresh class="refreshDiv" @refresh="pullingRefresh" @pullingdown="pullingForRefresh" :display="refreshing">
                <text v-if="pullingType === 'pulling'" class="refreshText">下拉刷新</text>
                <text v-else-if="pullingType === 'willRefresh'" class="refreshText">松手后开始刷新</text>
                <text v-else-if="pullingType === 'refreshing'" class="refreshText">正在刷新...</text>
                <text v-else-if="pullingType === 'pullingFinished'" class="refreshText">刷新完成☑️</text>
            </refresh>
            <!--login-->
            <slider class="bannerSlider" interval="2000" auto-play="true">
                <div class="bannerSliderFrame" v-for="item in imageList">
                    <image class="bannerImage"  resize="stretch" :src="item.src"></image>
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
                    <text style="color: white;font-weight: bold">{{$store.getters.userinfo.username?$store.getters.userinfo.username+' 注销':'登录'}}</text>
                </div>
            </div>
            <div v-if="!ListData[1]" class="loadingView">
                <text>正在加载中……</text>
            </div>
            <div v-else-if="ListData[0]" class="itemList" v-for="item in ListData">
                <homeCell class="cell"
                          :item="item"
                >{{item}}</homeCell>
            </div>
            <div style="flex: 1;" v-else>
                <text>{{loadingError}}</text>
            </div>
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
                loginText:'',
                ListData:[],
                sliderData:[
                    {title:'累计盘活金额',num:'43000'},
                    {title:'累计注册人数',num:'99900'},
                    {title:'累计投资金额',num:'11111'},
                ],
                count:1,
                imageList: [
                    { src: 'https://m.zhelitou.com.cn/fileserver/images/20170705/201707050937262690.jpg'},
                    { src: 'https://m.zhelitou.com.cn/fileserver/images/20170706/201707061421485534.jpg'},
                    { src: 'https://m.zhelitou.com.cn/fileserver/images/20170705/201707050915016325.jpg'}
                ],
                refreshing:'hide',
                pullingType: 'pulling',
                pullingD:'0',
                loadingError:''
            }
        },
        methods:{
            processLogin(){
//                this.toastMsg('home11==='+this.$store.getters.userinfo.username);
//                console.log('==================home created  get userinfo====================='+this.$store.getters.userinfo.username);
                this.loginText = this.$store.getters.userinfo.username?this.$store.getters.userinfo.username+' 注销':'登录';
            },
            testR (){


                this.refreshing = 'show'
                setTimeout(() => {
                    this.refreshing = 'hide'
                }, 2000)
            },
            goToLogin (even){
                if(!this.$store.getters.userinfo.username){
                    this.jump('/login');
                }else{
                    this.$store.commit('setUserinfo',{});
//                    this.loginText='登录';
                }
            },
            pullingForRefresh(even){

                console.log(even.pullingDistance);
                var distance = even.pullingDistance;
                this.$data.pullingD = distance;
                if ((distance < 100 && distance > -100) && this.refreshing === 'hide'){

                    this.pullingType = 'pulling';

                }else if ((distance > 100 || distance < -100) && this.refreshing === 'hide'){

                    this.pullingType = 'willRefresh';
                }
            },
            pullingRefresh(){

                if (this.pullingType === 'willRefresh'){

                    this.$data.refreshing = 'show';
                    this.getListData();
                }else {
                    //下拉距离不足

                    this.pullingType = 'pulling';
                    this.refreshing = 'hide';
                }
            },
            getListData(){

                this.$data.pullingType = 'refreshing';
                api.get_recommend_projects(this.dataHandle);
            },
            dataHandle(response){
                console.log(response);
                this.$data.ListData = [];

                if (response.ok){
                    //网络请求成功
                    var items = get_items_from_result(response.data);
                    if (items){
                        //数据获取成功
                        this.$data.ListData = items;
                        this.pullingType = 'pullingFinished';
                    }else {

                        //数据获取失败
                        this.loadingError = '网络请求异常'
                    }

                }else {
                    //网络请求失败
                    this.loadingError = '网络链接失败'
                }

                setTimeout(()=>{

                    this.refreshing = 'hide';
                    this.pullingType = 'pulling';
                },2000)
            },
            hidRefreshingV(){


            }
        },
        created () {
            console.log('==================home created=====================');


//            setTimeout(this.processLogin,100);
            this.$store.commit('setActivedTabIndex',0);
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
        flex: 1;
    }
    .homeHeader{
        background-color: white;
        height: 96px;
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
    .bannerSlider{

        width: 750px;
        height: 310px;
        display: flex;
    }
    .bannerSliderFrame{

        width: 750px;
        height: 310px;
    }
    .bannerImage{

        width: 750px;
        height: 310px;
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
        width: 400px;
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
        justify-content: flex-end;
        align-items: center;
        background-color: #afddff;
    }
    .refreshText{

        color: #888888;
        margin-bottom: 30px;
        font-size: 42px;
        text-align: center;
    }
    .loadingView{
        height: 500px;
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