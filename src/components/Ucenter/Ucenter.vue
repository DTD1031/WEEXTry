<template>
    <div>
        <scroller class="uctScroller">
            <!--header-->
            <div class="uctHeadDiv">
                <div class="uctHeaderTop">
                    <image class="uctIconImage" src="http://u2.tdimg.com/5/208/80/_101434714140625690614860509735790084055.jpg"></image>
                    <div class="uctHeaderNameDiv">
                        <text class="uctName">{{username}}</text>
                        <text class="uctUserType">个人用户</text>
                    </div>
                    <image class="uctMsg" src="https://m.zhelitou.com.cn/images/mes.png"></image>

                </div>
                <div class="uctHeaderMid">
                    <text class="uctHeaderNumTitle">资产总计 (元)</text>
                    <text style="font-size: 90px;margin-top:20px;color: white;font-weight: bolder;text-align: center">883388</text>
                </div>
                <div class="uctHeaderBottom">
                    <div class="uctHeaderItem">
                        <text class="uctHeaderNumTitle">当日预期收益 (元)</text>
                        <text class="uctHeaderItemNum">3333.3</text>
                    </div>
                    <div class="uctHeaderItem">
                        <text class="uctHeaderNumTitle">当日预期收益 (元)</text>
                        <text class="uctHeaderItemNum">3333.3</text>
                    </div>
                </div>
            </div>
            <!--mid-->
            <div></div>
            <!--bottomList-->
            <div style="height: 20px;background-color: #f2f0f1"></div>
            <div class="uctListCell" v-for="item in enumList1">
                <image style="width: 40px;height: 40px;margin-left: 10px;" :src="item.iconSrc"></image>
                <text style="margin-left: 10px;font-size: 28px;">{{item.title}}</text>
            </div>
            <div style="height: 20px;background-color:#f2f0f1"></div>
            <div class="uctListCell" v-for="item in enumList2">
                <image style="width: 40px;height: 40px;margin-left: 10px;" :src="item.iconSrc"></image>
                <text style="margin-left: 10px;font-size: 28px;">{{item.title}}</text>
            </div>
            <div style="height: 20px;background-color:#f2f0f1"></div>
            <div class="uctListCell" v-for="item in enumList3">
                <image style="width: 40px;height: 40px;margin-left: 10px;" :src="item.iconSrc"></image>
                <text style="margin-left: 10px;font-size: 28px;">{{item.title}}</text>
            </div>
        </scroller>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'uct',
        data () {
            return {
                username:this.$store.getters.userinfo.username,
                enumList1:[
                    {title:'我的项目',iconSrc:'https://m.zhelitou.com.cn/images/project.png'},
                    {title:'还本付息',iconSrc:''},
                    {title:'我的交易',iconSrc:'https://m.zhelitou.com.cn/images/trade.png'},
                    {title:'我的浙金币',iconSrc:'https://m.zhelitou.com.cn/images/gold.png'},
                ],
                enumList2:[
                    {title:'盘活通',iconSrc:'https://m.zhelitou.com.cn/images/protocal_t.png'},
                    {title:'协议盘活',iconSrc:''}
                ],
                enumList3:[
                    {title:'推荐项目',iconSrc:'https://m.zhelitou.com.cn/images/recommend.png'},
                ],
            }
        }
    }
</script>

<style scoped>
    .uctScroller{

        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .uctHeadDiv{

        flex: 1;
        background-color: #f54e60;
        height: 502px;
    }
    .uctHeaderTop{

        margin-top: 10px;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .uctIconImage{

        height: 70px;
        width: 70px;
        border-radius: 35px;
        margin-left: 10px;

    }
    .uctHeaderNameDiv{

        flex: 1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .uctName{

        font-size: 28px;
        color: white;

    }
    .uctUserType{

        margin-top: 10px;
        font-size: 24px;
        color: white;
    }
    .uctMsg{

        margin-right: 30px;
        width: 50px;
        height: 50px;
    }
    .uctHeaderMid{

        margin-top: 30px;
        padding-top: 10px;
        padding-bottom: 10px;

        height: 188px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

    }
    .uctHeaderNumTitle{

        font-size: 28px;
        text-align: center;
        color: white;
    }
    .uctHeaderItem{
        flex:1 ;
        padding-top: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .uctHeaderItemNum{

        margin-top: 20px;
        font-size:40px;
        color: white;
        font-weight: bolder;
        text-align: center;
    }
    .uctHeaderBottom{


        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .uctListCell{
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        border-bottom-width: 2px;
        border-color: lightgray;
    }
</style>
