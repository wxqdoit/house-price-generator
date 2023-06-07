import Vue from 'vue'
import VueRouter from 'vue-router'
import Wrapper from '../views/Wrapper.vue'
import Index from '../views/Index.vue'
import Profile from '../views/Profile.vue'
import TokenDetail from '../views/TokenDetail.vue'
import SmartMoney from '../views/SmartMoney.vue'
import Gas from '../views/Gas.vue'
import Nfts from '../views/Nfts.vue'
import AddressDetail from '../views/AddressDetail'
import AddressFinder from '../views/AddressFinder'


import { HomeIcon } from 'vue-feather-icons'

Vue.use(VueRouter)
const routes = [




    {
        path: '/',
        name: 'Home',
        icon: HomeIcon,
        leaf: false,
        component: Index,
        children: null

    },

    // {
    //     path: '/token/:symbol',
    //     name: 'Token',
    //     icon: "el-icon-star-off",
    //     leaf: false,
    //     component: TokenDetail,
    //     children: null
    // },
    // {
    //     name: 'Discovery',
    //     path: '/discovery',
    //     icon: "el-icon-star-off",
    //     component: Wrapper,
    //     leaf: true,
    //     children: [
    //         {
    //             name: 'Data Demo',
    //             path: '/discovery/profile',
    //             component: Profile,
    //             children: null
    //
    //         },
    //         {
    //             path: '/smart-money',
    //             name: 'Smart Money',
    //             component: SmartMoney,
    //             children: null
    //         },
    //         {
    //             path: '/address/:addr',
    //             name: 'Address',
    //             hidden: true,
    //             component: AddressDetail,
    //             children: null
    //         },
    //     ]
    // },
    // {
    //     path: '/gas-tracker',
    //     name: 'Gas Tracker',
    //     leaf: false,
    //     icon: "el-icon-star-off",
    //     component: Gas
    // },
    // {
    //     path: '/nfts-tool',
    //     name: 'Nfts Tool',
    //     leaf: false,
    //     icon: "el-icon-star-off",
    //     component: Nfts
    // },
    // {
    //     path: '/address-finder',
    //     name: 'Address Finder',
    //     leaf: false,
    //     icon: "el-icon-star-off",
    //     component: AddressFinder
    // },
    // {
    //     path: '/coin-tool',
    //     name: 'Coin Tool',
    //     component: Wrapper,
    //     leaf: true,
    //     icon: "el-icon-star-off",
    //     children: [
    //         {
    //             path: '/coin-tool/dex-page',
    //             name: 'Dex Tool',
    //             component: DexPage,
    //             children: null
    //         }
    //     ]
    // },

];

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
