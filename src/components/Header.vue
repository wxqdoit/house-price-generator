<template>
    <header class="header">
        <div class="logo-main">HousePriceGen</div>

        <div class="header_right">
            <nav>
                <ul class="header-right-nav">

<!--                    <li>-->
<!--                        <span v-if="btnLoading" class="connect-wallet" ><i class="el-icon-loading"></i></span>-->
<!--                        <span v-else @click="walletClick" class="connect-wallet" >{{account}}</span>-->
<!--                    </li>-->
                </ul>

            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String,
        account:String,
        btnLoading:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        walletClick(){
            this.$emit('walletClick',true)
        }
    }
}
</script>

<style scoped>
.header-right-nav{
    text-align: center;
}
/*header style*/
.logo-main{
    line-height: 64px;
    color: #000000;
    font-size: 26px;
    font-weight: 600;
    padding: 0 20px;
}
.header {
    width: 100%;
    height: 64px;
    border-bottom: solid 1px #d9d9d9;
    position: fixed;
    z-index: 10;
    background-color: #ffffff;
    display: flex;
}
.header .logo{height: 64px;line-height: 54px; text-align: center;font-size: 20px;color: #393d49;font-weight: 600;padding: 0px 20px}
.header .header_right{height:64px;margin-left: auto;padding: 0px 20px;    -webkit-box-align: center;
    align-items: center;
    margin-right: 10px;
}
span.connect-wallet{
    height: 34px!important;
    border: 1px solid #1de9b6;
    color: #1de9b6!important;
    min-width: 120px;

}
.connect-wallet:hover{
    color: #03d29a !important;
}
.header .header_right nav ul{display: flex}
.header .header_right nav ul li {float: right;position: relative;margin: 0 5px}
.header .header_right nav ul li span{cursor: pointer;display: block;height: 36px ;padding: 0px 10px;margin: 15px 0;line-height: 36px;color: #adadad;font-size: 15px;border-radius: 5px}
.header .header_right nav ul li span:hover{background-color: rgb(36, 46, 40);color: #d7d7d7;}
</style>
