<template>
    <div class="homeMain">
        <!--header-->
        <div class="header">
            <div class="searchBt">
                <text style="color:white;">Search</text>
            </div>
            <input class="searchInput"/>
        </div>
        <!--body-->
        <!--<div class="body" v-for="item in bass" :id="item" :key="item">-->
            <!--<homeCell>{{item}}</homeCell>-->
        <!--</div>-->
        <list>
            <cell class="cell" v-for="item in bass">
                <homeCell>{{item}}</homeCell>
            </cell>
        </list>
    </div>
</template>


<style>
    .homeMain{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        background-color: lightgray;
    }
    .header{
        background-color: #0088fb;
        height: 100px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

    }
    .searchInput{

        width: 50%;
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
    .cell{
        padding-left: 10px;
        padding-right: 10px;
        padding-top:5px;

    }
</style>

<script type="text/ecmascript-6">

    import homeCell from "./homeCell.vue"

    export default {
        name: 'home',
        data () {
            return {
                bass:['1','2','3','4','5','6','7','8']
            }
        },
        components:{

            "homeCell":homeCell
        }
    }
</script>
