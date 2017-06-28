/**
 * Created by chongfengzhixuyongqi on 2017/6/21.
 */
export default {
    methods: {
        jump (to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },

        getImg (imgSrc){

            if (imgSrc){

                return 'http://10.88.1.33/fileServer/' + imgSrc
            }
        }
    }
}
