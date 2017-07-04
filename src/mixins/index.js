/**
 * Created by chongfengzhixuyongqi on 2017/6/21.
 */
const modal = weex.requireModule('modal');
export default {
    methods: {
        jump (to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },getImg (imgSrc){

            if (imgSrc){

                return 'http://10.88.1.33/fileServer/' + imgSrc
            }
        },toastMsg(msg){
            modal.toast({ message: msg, duration: 1 });
        }

    }
}
