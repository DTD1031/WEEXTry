<template>
    <div class="loginV">
        <!--header-->
        <zltCommonHeader title="登录" :onclick="goback"/>
        <!--body-->
        <div class="inputDiv" style="margin-top: 50px">
            <image  style="width:36px;height:36px;" src="https://m.zhelitou.com.cn/images/wap/zlt2img/sign_in_user_2x.png" />
            <!--input type="text"   class="inputField"  placeholder ="请输入用户名" v-model="input_username" @input="oninput($event,'username')" /-->
            <input type="text"   class="inputField"  placeholder ="请输入用户名" v-model="input_username"  />
        </div>
        <div class="inputDiv" style="margin-top: 20px">

            <image  style="width:36px;height:40px;" src="https://m.zhelitou.com.cn/images/wap/zlt2img/icon_lock_2x.png" />
            <input type="password" class="inputField" placeholder ="请输入密码"  v-model="input_pwd" />
            <!--input type="password" class="inputField" placeholder ="请输入密码"  v-model="input_pwd" @input="oninput($event,'pwd')"/-->
            <!--input type="password" class="inputField" placeholder ="请输入密码"  v-model="input_pwd" @input="input_pwd=$event.value"/-->
        </div>

        <div class="btn" @click="dologin">
            <text class="btn-text" >登录</text>
        </div>

        <image  style="margin-top:300px;width: 412px;height:61px;" src="https://m.zhelitou.com.cn/images/wap/zlt2img/bottom_2x.png" />
    </div>
</template>

<script type="text/ecmascript-6">
    import zltCommonHeader from "../zlt-common-header.vue"
    const modal = weex.requireModule('modal');

    export default {
        name: "login",
        data:function(){
            return {
                input_username:'',
                input_pwd:''
            }
        },
        methods:{
            goback (even){

                this.jump('/')
            },
            dologin(event){
                //this.toastMsg('input_username='+this.input_username+" ,input_pwd="+this.input_pwd);
                if(!this.input_username){
                    this.toastMsg('请输入用户名');
                    return;
                }
                if(!this.input_pwd){
                    this.toastMsg('请输入密码');
                    return;
                }
                if('qwe' != this.input_pwd){
                    this.toastMsg('密码错误请重新输入');
                    return;
                }

                this.$store.commit('setUserinfo',{'custid':'88888','username':this.input_username});
                this.toastMsg('登录成功');

                this.jump('/uct');
            },
            oninput: function (event,type) {
                this.toastMsg('value='+event.value+" ,type="+type);
                console.log(event);
                if(type=='username'){
                    this.input_username = event.value;
                }
                if(type=='pwd'){
                    this.input_pwd = event.value;
                }
            }
        },
        created () {

        },
        components:{
            "zltCommonHeader":zltCommonHeader
        }
    }
</script>

<style>
    .loginV{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f8f8f8;
    }

    .inputDiv{
        width:750px;
        height: 100px;
        border-top-width: 1px;
        border-top-color: #d7d7d7;
        border-bottom-width: 1px;
        border-bottom-color: #d7d7d7;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        padding:20px;
    }
    .inputField{
        height: 80px;
        width: 500px;
        color:black;
        font-size: 28px;
        margin-left: 20px;
    }
    .btn{

        text-align: center;
        width: 700px;
        height: 106px;
        font-size: 36px;
        margin-top: 130px;
        background-color:#e4393c;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .btn-text{
        font-size: 36px;
        color:white;
    }

</style>
