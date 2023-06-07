import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import {Api} from './util/Api'
import './assets/theme/index.css'
import './assets/font/iconfont.css';
import './assets/style/base.css'
import './assets/style/default.css'

Vue.use(ElementUI);


import moment from "moment"

Vue.prototype.$moment = moment;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    data: {
        api: null,
    },
    created() {
        this.api = Api.getInstance(this);
        this.$store.dispatch('gdData/setExpandMenuIndex',this.getExpandIndexArr())
    },
    methods:{
        getExpandIndexArr(){
            let r = this.$router.options.routes;
            let index = [];
            for (let i = 0; i < r.length; i++) {
                if(r[i].children){
                    for(let j = 0;j<r[i].children.length;j++){
                        if(r[i].children[j].path === this.$route.path){
                            index = [i];
                            return index
                        }
                    }
                }
            }
            return []
        }
    },
    render: h => h(App)
}).$mount('#app')
