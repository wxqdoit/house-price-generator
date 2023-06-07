import Vue from 'vue'
import Vuex from 'vuex'
import gdData from './module/gdData'

Vue.use(Vuex)
const  debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules:{
    gdData
  },
  strict:debug
})
