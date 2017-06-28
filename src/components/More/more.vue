<template>
    <div class="more">
        <slider class="slider" interval="2000" auto-play="true">

            <div class="sliderFrame" v-for="item in imageList">
                <image class="image" resize="cover" :src="item.src"></image>
            </div>
        </slider>
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
                imageList: [
                    { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=430472977,3630340535&fm=26&gp=0.jpg'},
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498563839597&di=1ec085a5d860f9ba6b2c339454b7bbf3&imgtype=0&src=http%3A%2F%2Fimg.newyx.net%2Fnewspic%2Fimage%2F201411%2F15%2F153d372e1f.jpg'},
                    { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498563839593&di=2521ed845a7dc572f1d5e270bb0e362f&imgtype=0&src=http%3A%2F%2Fow.replays.net%2Fuploads%2Fremote%2F24861464934623.jpg'}
                ],

                foo:'foooo'
            }
        },
        components:{

//            'vue-slider':vueSlider
        }
    }
</script>

<style>

    .more{

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }
    .slider{

        width: 500px;
        height: 300px;
    }
    .sliderFrame{

        width: 500px;
        height: 300px;

    }
    .image{

        width: 500px;
        height: 300px;
    }
</style>
