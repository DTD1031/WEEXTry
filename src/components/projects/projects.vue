<template>
    <div>
        <div class="projectSearchView">
            <input class="projectSearchField"/>
            <div class="projectSearchBt">
                <text style="color: white">搜索</text>
            </div>
        </div>
        <div style="width: 750px;height: 2px;background-color: grey"></div>
        <scroller style="background-color: lightgray">
            <refresh class="refreshDiv" @refresh="pullingRefresh" @pullingdown="pullingForRefresh" :display="refreshing">
                <text v-if="pullingType === 'pulling'" class="refreshText">下拉刷新</text>
                <text v-else-if="pullingType === 'willRefresh'" class="refreshText">松手后开始刷新</text>
                <text v-else-if="pullingType === 'refreshing'" class="refreshText">正在刷新...</text>
                <text v-else-if="pullingType === 'pullingFinished'" class="refreshText">刷新完成☑️</text>
            </refresh>
            <div class="itemList" v-for="item in ListData">
                <ProjectCell class="cell"
                             :item="item"
                >{{item}}</ProjectCell>
            </div>
            <div style="height: 100px"></div>
        </scroller>
    </div>
</template>

<script>

    import ProjectCell from '../Home/homeCell.vue'

    const modal = weex.requireModule('modal')
    var apis = require('../../commons/api');
    var jsonutil = require('../../commons/jsonutil');
    export default {
        name: 'projects',
        data () {
            return {

                ListData:[],
                pullingType: 'pulling',
                refreshing:'hide'
            }
        },
        methods: {

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
                    this.requestData('1');
                }else {
                    //下拉距离不足

                    this.pullingType = 'pulling';
                    this.refreshing = 'hide';
                }
            },

            requestData(page){

                this.$data.pullingType = 'refreshing';
                apis.get_projects(page,this.processData);
            },
            processData(response){
                console.log(response);
                this.ListData = [];
                console.log('BB' + response);
                if(response.ok){
                    var items = jsonutil.get_items_from_result(response.data);
                    console.log('AA' + items);

                    if(!items){
                        modal.toast({ message: '获取数据失败1', duration: 1 });
                        return;
                    }
                    modal.toast({ message: '获取数据成功，遍历项目', duration: 1 });

                    this.ListData = items
                    this.pullingType = 'pullingFinished';
                }else {
                    modal.toast({ message: '获取数据失败2', duration: 1 });
                }

                setTimeout(()=>{

                    this.refreshing = 'hide';
                    this.pullingType = 'pulling';
                },2000)
            }
        },
        created () {
            this.requestData("1");

        },
        components:{

            'ProjectCell':ProjectCell
        }
    }
</script>

<style>

    .projectSearchView{

        height: 100px;
        width: 750px;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .projectSearchBt{

        width: 130px;
        height: 60px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: -2px;
    }
    .projectSearchField{

        width: 560px;
        height: 60px;
        background-color: white;
        color: black;
        border-width: 2px;
        border-color: grey;
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
    .cell{
        padding-left: 10px;
        padding-right: 10px;
        padding-top:5px;
        padding-bottom: 0px;
        height: 400px;
    }
</style>