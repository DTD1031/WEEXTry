<template>
    <div class="homeCellMain">
        <text class="title">Title</text>
        <text class="nextTitle">next title</text>
        <!--midView-->
        <div class="midDiv">
            <div class="leftNum">
                <div class="rateView">
                    <text class="rateNum">5.8</text>
                    <text class="rateSign">%</text>
                </div>
                <text class="itemTitle">预期年化收益率</text>
            </div>
            <div class="rightNum">
                <!--timeLimit-->
                <div class="rightNumCell">
                    <text class="itemTitle">融资期限</text>
                    <text class="rightNumNum">12+12</text>
                    <text class="rightNumUnit">个月</text>
                </div>
                <!--startNum-->
                <div class="rightNumCell">
                    <text class="itemTitle">认购起点</text>
                    <text class="rightNumNum">5</text>
                    <text class="rightNumUnit">万元</text>
                </div>
            </div>
        </div>
        <!--progress-->
        <div class="progressBg">
            <div class="progress"></div>
        </div>
        <!--button-->
        <div class="investBt">
            <text class="investBtTitle">立即投资</text>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "homeCell",
        data () {
            return {}
        }
    }
</script>

<style>
.homeCellMain{

    margin: 5%;
    height: 400px;
    background-color: white;
    border-radius: 10px;
}
    .title{

        font-size: 14wx;
        padding-top: 15px;
        padding-left: 20px;
    }
    .nextTitle{
        font-size: 12wx;
        padding-top: 5px;
        padding-left: 20px;
        color: grey;
    }
    .midDiv{

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-right: 20px;

    }
    .rateView{

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        padding-top: 20px;
    }
    .rateNum{

        font-size: 36wx;
        font-weight: bolder;
        color: red;
    }
    .itemTitle{

        font-size: 12wx;
        color: grey;
    }
    .rateSign{
        position: relative;
        bottom: 15px;
        font-size: 22wx;
    }
    .leftNum{
        flex-basis:0;
        flex-grow:1;
        margin-left: 20wx;
    }
    .rightNum{
        flex-basis:0;
        flex-grow:1;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        margin-right: 20px;
    }
    .rightNumCell{

        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .rightNumNum{

        font-size: 17wx;
        padding-left: 10px;
        margin-right: 10px;
    }
    .rightNumUnit{

        position: relative;
        top: 5px;
        font-size: 13wx;
    }
    .progressBg{

        margin-left: 20px;
        margin-right: 20px;
        margin-top: 40px;
        width: inherit;
        height: 5px;
        background-color: grey;
    }
    .progress{

        width: 300px;
        height: 5px;
        background-color: red;
    }
    .investBt{

        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        background-color: red;
        width: inherit;
        height: 70px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .investBtTitle{

        color: white;

        font-size: 30wx;
        font-weight: 500;
    }

</style>
