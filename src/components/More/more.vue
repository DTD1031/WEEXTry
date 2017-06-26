<template>
    <div>
            <div style="width: 100px;height: 100px;background-color: darkcyan" v-for="srcItem in imgSrc">
                <img style="height: 100px;width: 100px" v-bind:src="getImg(srcItem.name)"/>
            </div>
        <!--<div v-for="src in imgSrc">-->
            <!--<image style="width: 100px;height: 100px" v-bind:src="getImg(src.name)"></image>-->
        <!--</div>-->
        <router-view></router-view>
        <text style="font-size: 100px;background-color: #afddff" @click="jump('/more/Msg')">HHHHHH</text>
        <text style="font-size: 100px;background-color: chartreuse" @click="jump('/more/')">BBBBB</text>

    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'more',
        data () {
            return {
                imgSrc:[
                    {name:'31.png',i:0},
                    {name:'45.png',i:1},
                    {name:'73.png',i:2},
                ],
                foo:'foooo'
            }
        }
    }
</script>

<style>

</style>
