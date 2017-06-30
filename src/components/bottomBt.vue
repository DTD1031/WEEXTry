<template>
    <div class="routeBt" @click="jump('/login')">
        <image class="tabberIcon" :src="imgSrc"></image>
        <text class="{tabSelected == 1 ? bottomTitleSelected : bottomTitle}" ref="tab2">{{title}}</text>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'bottomBt',
        data () {
            return {}
        },
        props:['title','imgSrc']
    }
</script>

<style>
    .routeBt{
        flex: 1;
        background-color: white;

        border-color: lightgray;
        border-right-width: 2px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tabberIcon{

        width: 40px;
        height:40px;
    }
    .bottomTitle{

        margin-top: 12px;
        color: #444444;
        font-size: 27px;
    }
    .bottomTitleSelected{

        margin-top: 12px;
        color: mediumblue;
        font-weight: 800;
        font-size: 27px;
    }
</style>
