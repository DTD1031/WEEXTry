// import Vue from 'vue'
import Vuex from 'vuex'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

// Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo:{custid:'',username:''}
  },

  getters: {
    userinfo(state){
      return state.userinfo;
    }


  },
    mutations: {
      setUserinfo(state,user){
        state.userinfo = user;
      }
    }

    })

export default store
