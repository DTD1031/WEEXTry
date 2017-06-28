<template>
    <div class="homeMain">
        <!--header-->
        <div class="header">
            <div class="searchBt">
                <text style="color:white;">{{count}}</text>
            </div>
            <input class="searchInput"/>
        </div>
        <!--body-->
        <scroller class="bodyScroller">
            <!--headRefresh-->
            <refresh class="refreshDiv" @refresh="onresfresh">
                <text class="refreshText">it's refresh</text>
            </refresh>
            <slider class="slider" interval="2000" auto-play="true">
                <div class="frame" v-for="item in imageList">
                    <image class="image" resize="stretch" :src="item.src"></image>
                </div>
            </slider>
            <div class="itemList" v-for="item in bass">
                <homeCell class="cell">{{item}}</homeCell>
            </div>
            <loading>
                <text>load more...</text>
            </loading>
        </scroller>
        <!--list-->



        <!--<list class="itemList">-->
            <!--<cell class="cell" v-for="item in bass">-->
                <!--<homeCell>{{item}}</homeCell>-->
            <!--</cell>-->
        <!--</list>-->
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
    .bodyScroller{

        flex: 1;
        display: flex;
        background-color: forestgreen;

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
    .frame {

    }
    .refreshDiv{

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

    export default {
        name: 'home',
        data () {
            return {
                bass:['1','2','3','4','5','6','7'],
                count:1,
                imageList: [
                    { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=430472977,3630340535&fm=26&gp=0.jpg'},
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498563839597&di=1ec085a5d860f9ba6b2c339454b7bbf3&imgtype=0&src=http%3A%2F%2Fimg.newyx.net%2Fnewspic%2Fimage%2F201411%2F15%2F153d372e1f.jpg'},
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498563839593&di=2521ed845a7dc572f1d5e270bb0e362f&imgtype=0&src=http%3A%2F%2Fow.replays.net%2Fuploads%2Fremote%2F24861464934623.jpg'}
                ]
            }
        },
        methods:{

            onresfresh:function (even) {

                return this.$data.count ++;
            }
        },
        components:{

            "homeCell":homeCell
        }
    }
</script>
