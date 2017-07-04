<template>
    <div class="parent-div">
        <div style="justify-content: center;align-items: center;width:60px;height:100px;display: flex;flex-direction: row;" @click="onclick">
            <image  style="width:18px;height:32px;" src="https://m.zhelitou.com.cn/images/wap/leaderbtn.png" />
        </div>

        <div style="flex:1;align-items: center;">
            <text style="font-size: 34px;">{{title}}</text>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: "zltCommonHeader",
        props:{
            title: {
                type: String,
                required: true
            },
            onclick:{
                type:Function
            }
        },
        data () {
            return {}
        }
    }
</script>

<style>
    .parent-div{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        background-color: white;
        height: 100px;
        width:750px;
        align-items:center;
        border-bottom-width: 1px;
        border-bottom-color: #d7d7d7;
    }

</style>