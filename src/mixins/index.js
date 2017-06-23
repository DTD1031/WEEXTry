/**
 * Created by chongfengzhixuyongqi on 2017/6/21.
 */
export default {
    methods: {
        jump (to) {
            if (this.$router) {
                this.$router.push(to)
            }
        }
    }
}
