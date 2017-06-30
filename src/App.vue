<template>
    <div @androidback="back">
        <router-view style="flex: 1"></router-view>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            back: function () {
                this.$router.back()
            }
        }
    }
</script>
