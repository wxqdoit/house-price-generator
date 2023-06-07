<template>
    <div class="home">
        <Header />
        <router-view/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Slide from '@/components/Slide.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Slide
    },
    data(){
        return{
            centerDialogVisible: false,
            btnLoading:false,
            account: 'connect wallet',
        }
    },

    methods: {

        formatAccount(account) {
            return account.replace(account.slice(5, 37), "****")
        },
        closeHandler(){
            this.btnLoading = false
        }
    }
}


</script>
<style>
.wallet-app-list{
    padding: 10px 0;
}
.wallet-app-list-i{
    width: 200px;
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #3f4642;
    border-radius: 6px;
    transition: all 0.2s;
    cursor: pointer;
}
.wallet-app-list-i:hover{
    background-color: #48504c;
    transition: all 0.2s;
}
.wallet-app-list-i div{
    height: 36px;
}
.wallet-app-list-i div:last-child{
    color: #bababa;
    line-height: 36px;
    font-size: 16px;
    margin: 0 10px;
    letter-spacing: 1px;

}
.wallet-app-list img{
    width: 36px;
}

.wallet-conn-tip{
    padding: 16px 0;
    border-radius: 2px;
    font-size: 14px;
    line-height: 20px;
    color: #adadad;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.wallet-dialog-title{
    font-size: 26px;
    color: #e3e3e3!important;
    text-align: left;
}
</style>
