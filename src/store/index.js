// import Vue from 'vue'
import Vuex from 'vuex'
const modal = weex.requireModule('modal');

const storage = weex.requireModule('storage');
const STORAGE_KEY_USERINFO = 'USERINFO';
const userinfo_origin = {custid:'',username:'',time:0};
const EXIPRIE_TIME = 1000*60*60*24*30;

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

var state = {
    userinfo:userinfo_origin,
    activedTabIndex:0
};


storage.getItem(STORAGE_KEY_USERINFO, event => {
    if (event.result == "success" && event.data){
        // modal.toast({ message: event.data, duration: 1 });
        var data = JSON.parse(event.data);
        state.userinfo = data;
    }
});


// 存储plugin，存储感兴趣的数据，store里数据太多，没必要全持久化
const storagePlugin = store => {
    store.subscribe((mutation, state) => {
        // console.log(mutation);
        // console.log(state);
        // 目前只存储用户信息
        if(mutation && mutation.type == 'setUserinfo'){
            storage.setItem(STORAGE_KEY_USERINFO,JSON.stringify(mutation.payload),event => {
                console.log('cache success');

            });
        }
    })
}


const store = new Vuex.Store({
    state: state,
    plugins:[storagePlugin],
    getters: {
      userinfo(state){
        // console.log('==================getters-userinfo=============');
        var user = state.userinfo;
        // var now = new Date().getTime();
        // var time = user.time;
        // var distance = now - time;
        //
        //
        // if(distance >=EXIPRIE_TIME){
        //   user = userinfo_origin;
        //   store.commit('setUserinfo',user);
        //   // state.userinfo=user;
        //   // storage.setItem(STORAGE_KEY_USERINFO,JSON.stringify(user),event => {
        //   //     console.log('session timeout');
        //   // });
        // }
        return user;
      },
      activedTabIndex(state){
          return state.activedTabIndex;
      }
    },
    mutations: {
      setUserinfo(state,user){
        user.time = new Date().getTime();
        state.userinfo = user;
      },
      setActivedTabIndex(state,index){
          state.activedTabIndex = index;
      }
    }

});
export default store
