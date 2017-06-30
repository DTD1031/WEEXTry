<template>
    <div>

    </div>
</template>

<script>

    const modal = weex.requireModule('modal')
    var apis = require('../../commons/api');
    var jsonutil = require('../../commons/jsonutil');
    export default {
        name: 'projects',
        data () {
            return {}
        },
        methods: {
            requestData(page){
                apis.get_projects(page,this.processData);
            },
            processData(response){
                console.log(response);
                if(response.ok){
                    var items = jsonutil.get_items_from_result(response.data);
                    if(!items){
                        modal.toast({ message: '获取数据失败', duration: 1 });
                        return;
                    }
                    modal.toast({ message: '获取数据成功，遍历项目', duration: 1 });
                    for(var i=0;i<items.length;i++){
                        var item =items[i];
                        console.log(item);
                        modal.toast({ message: item.name, duration: 1 });

                    }
                }else {
                    modal.toast({ message: '获取数据失败', duration: 1 });
                }
            }
        },
        created () {
            this.requestData("1");
//            apis.get_projects("1", response => {
//                console.log(response);
//                if(response.ok){
//                    var items = jsonutil.get_items_from_result(response.data);
//                    if(!items){
//                        modal.toast({ message: '获取数据失败', duration: 1 });
//                        return;
//                    }
//                    modal.toast({ message: '获取数据成功，遍历项目', duration: 1 });
//                    for(var i=0;i<items.length;i++){
//                        var item =items[i];
//                        console.log(item);
//                        modal.toast({ message: item.name, duration: 1 });
//
//                    }
//                }else {
//                    modal.toast({ message: '获取数据失败', duration: 1 });
//                }
//
//            });
        }
    }
</script>

<style>

</style>