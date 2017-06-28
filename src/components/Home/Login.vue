<template>
    <div class="loginV">
        <!--header-->
        <div class="header">
            <div class="navBt leftNavBt" @click="goback">
                <text>返回</text>
            </div>

            <text>Login</text>

            <div class="navBt rightNavBt">
                <text>注册</text>
            </div>
        </div>
        <!--body-->
        <div class="inputDiv" style="margin-top: 100px">
            <text class="inputTitle">用户名</text>
            <input class="inputField"/>
        </div>
        <div class="inputDiv">

            <text class="inputTitle">密码</text>
            <input class="inputField"/>
        </div>
        <div class="configBt">
            <text class="configBtTitle">登录</text>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "login",
        data () {
            return {}
        },
        methods:{

            goback (even){

                this.jump('/home')
            }
        }
    }
</script>

<style>
    .loginV{

        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: darkslategrey;

    }
    .header{

        height: 100px;
        width: 750px;
        background-color: #0088fb;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .navBt{

        width: 100px;
        height: 60px;
        background-color: white;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .leftNavBt{

        position: relative;
        left: -50px;
    }
    .rightNavBt{

        position: relative;
        right: -50px;
    }
    .inputDiv{

        height: 120px;
        width: 750px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .inputField{
        flex-basis: 300px;
        height: 60px;
        width: 500px;
        border-width: 2px;
        border-color: grey;

        background-color: white;
    }
    .inputTitle{
        width: 120px;
        font-size: 35px;
        text-align: center;
        background-color: #afddff;

        margin-right: 20px;
    }
    .configBt{

        text-align: center;
        width: 300px;
        height: 60px;
        font-size: 40px;
        margin-top: 40px;
        background-color: #0088fb;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .configBtTitle{


    }
</style>
