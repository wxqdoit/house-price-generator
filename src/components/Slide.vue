<template>
    <div class="slide" id="slide">
        <ul class="menu">
            <li v-for="(item,index) in menu">
                <router-link
                    @click="expandMenu(item,index)"
                    class="super_menu"
                    v-if="!item.leaf && !item.hidden"
                    :to="{path:item.path}"
                    :id="'path_'+item.path"
                    :class="{'menu-active':item.path===$route.path}"
                >
                    <i :class="item.icon"></i>
                    <span v-html="item.name"></span>
                </router-link>
                <a v-if='item.leaf && !item.hidden' href="javascript:void(0)"
                   @click="expandMenu(item,index)"
                   class="super_menu"

                   :class="{'menu-expand-a':gdData.expandMenuIndex.indexOf(index)!==-1}">
                    <i :class="item.icon"></i>
                    <span v-html="item.name"></span>
                    <i v-if="item.children" class="iconfont icon-xiangyou1"
                       :class="{'rotate-90':gdData.expandMenuIndex.indexOf(index)!==-1}"></i>
                </a>
                <ul class="menu_child_list" v-if="item.leaf && item.children && !item.hidden"
                    :class="{'menu-expand':gdData.expandMenuIndex.indexOf(index)!==-1}">
                    <li v-for="$item in item.children">
                        <router-link v-if="!$item.hidden" :to="{path:$item.path}"
                                     :class="{'menu-sub-active':$item.path===$route.path}">
                            <i :class="$item.icon"></i>
                            <span v-html="$item.name"></span>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Gas from "@/views/Gas";

export default {
    data() {
        return {
            menu: []
        }
    },
    computed: mapState({
        gdData: state => {
            return state.gdData
        }
    }),
    created() {
        this.menu = this.$router.options.routes
    },
    mounted() {
    },
    methods: {

        expandMenu(route, index) {
            index = Number(index)
            if (route.leaf) {
                let arrIndex = JSON.parse(JSON.stringify(this.gdData.expandMenuIndex))
                let _index = arrIndex.indexOf(index)
                if (_index !== -1) {
                    arrIndex.splice(_index, 1)
                } else {
                    arrIndex.push(index)
                }
                this.$store.dispatch('gdData/setExpandMenuIndex', arrIndex)
            }
        },

    },
}
</script>
<style>

/* slide menu style */
.slide {
    overflow-y: auto;
    width: 249px;
    border-right: 1px solid #d9d9d9;
    position: fixed;
    bottom: 0;
    z-index: 22;
    top: 65px;
}

.slide, .slide a {
    color: #2c3e50;
}

.slide .admin_header_img {
    display: block;
    width: 54px;
    height: 54px;
    margin: 0px auto;
    padding: 16px 0px;
    position: relative;
    overflow: hidden;
    color: #fff
}

.slide .admin_header_img img {
    border-radius: 50%;
    width: 54px;
    height: 54px
}

.slide .admin_header_img .upload_header_img {
    position: absolute;
    width: 54px;
    height: 29px;
    border-bottom-left-radius: 29px;
    border-bottom-right-radius: 29px;
    line-height: 29px;
    text-align: center;
    top: 45px;
    font-size: 12px;
    opacity: 0;
    transition: all .2s;
}

.slide .admin_header_img:hover .upload_header_img {
    background-color: rgba(0, 0, 0, .6);
    color: #fff;
    transition: all .2s;
    opacity: 1
}

.slide .admin_info {
}

.slide .admin_info .admin_detail {
    padding-bottom: 16px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid #c6c6c6;
}

.menu li a {
    display: block;
    padding: 0px 20px;
    line-height: 42px;
    position: relative;
    font-size: 16px;
    color: #adadad;
    text-align: left;
    transition: all .2s;
}

.menu .icon-xiangyou1, .menu .icon-xiangxia2 {
    float: right
}

.menu li .super_menu:hover {
    transition: all .2s;
    background-color: rgb(36 46 40);
}

.menu_child_list {
    height: 0px;
    overflow: hidden;
    transition: all 0.2s
}

.menu-expand {
    height: auto;
    transition: all 0.3s
}

.menu-expand-a {
    color: #d7d7d7 !important
}

.child-active {
    background-color: #eee;
    color: #1de9b6 !important;
    border-left: 2px solid #1de9b6 !important;
}

.menu i {
    font-weight: 600;
}

.menu_child_list li a:hover {
    background-color: rgb(190, 213, 199);
    color: #1de9b6;
    transition: color, background-color .2s
}

.menu_child_list li a {
    padding-left: 37px;
    display: block;
    line-height: 32px;
    position: relative;
    font-size: 14px;
    color: rgb(154, 162, 170)
}

.menu li a span {
    padding-left: 15px;
}

.iconfont {
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    transition: transform 0.2s;
}

/*menu active status*/
.menu-active {
    font-weight: 600;
    background-color: rgb(36 46 40);
    color: #42b983 !important;
    transition: all .2s;
}

.menu-sub-active {
    background-color: rgb(36 46 40);
    color: #1de9b6 !important;
}

.rotate-90 {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.main_content {
    position: relative;
    margin-left: 250px;
    top: 54px;
    padding: 20px 20px;
    background-color: #ffffff
}

.nav ul li {
    float: right
}

.nav ul li a {
    display: block;
    height: 54px;
    padding: 0px 12px
}
</style>



