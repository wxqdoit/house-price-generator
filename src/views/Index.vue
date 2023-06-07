<template>
    <div class="index">
        <div class="main-content">
            <main>
                <div class="block-item">
                    <div class="flex">
                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>面积</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('area','面积','㎡')">增加</el-button>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(areaItem,i) in area">
                                    <el-input placeholder="Please input" v-model="areaItem.score">
                                        <template slot="prepend">{{ areaItem.name }}</template>
                                        <template slot="append">
                                            <div @click="handRemove('area',i)"><i class="el-icon-delete"></i></div>
                                        </template>
                                    </el-input>
                                </div>
                            </div>
                        </div>

                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>朝向</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('toward','朝向')">增加</el-button>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(towardItem,i) in toward">
                                    <el-input placeholder="Please input" v-model="towardItem.score">
                                        <template slot="prepend">{{ towardItem.name }}</template>
                                        <template slot="append">
                                            <div @click="handRemove('toward',i)"><i class="el-icon-delete"></i></div>
                                        </template>

                                    </el-input>
                                </div>
                            </div>
                        </div>


                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>景观</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('landscape','景观')">增加</el-button>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(landscapeItem,i) in landscape">
                                    <el-input placeholder="Please input" v-model="landscapeItem.score">
                                        <template slot="prepend">{{ landscapeItem.name }}</template>
                                        <template slot="append">
                                            <div @click="handRemove('landscape',i)"><i class="el-icon-delete"></i></div>
                                        </template>

                                    </el-input>
                                </div>
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>户型</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('houseType','户型')">增加</el-button>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(houseTypeItem,i) in houseType">
                                    <el-input placeholder="Please input" v-model="houseTypeItem.score">
                                        <template slot="prepend">{{ houseTypeItem.name }}</template>
                                        <template slot="append">
                                            <div @click="handRemove('houseType',i)"><i class="el-icon-delete"></i></div>
                                        </template>
                                    </el-input>
                                </div>
                            </div>
                        </div>

                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>楼层</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('floor','楼层')">增加</el-button>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(floorItem,i) in floor">
                                    <el-input placeholder="Please input" v-model="floorItem.score">
                                        <template slot="prepend">{{ floorItem.name }}</template>
                                        <template slot="append">
                                            <div @click="handRemove('floor',i)"><i class="el-icon-delete"></i></div>
                                        </template>
                                    </el-input>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div class="block-item">
                    <div class="flex">
                        <div class="item-box">
                            <div class="list-item-title">
                                <span>基准参数</span>
                            </div>
                            <div class="flex-column gap-6">
                                <el-form ref="form" :model="baseArg" label-width="80px">
                                    <el-form-item label="期号">
                                        <el-input v-model="baseArg.period" placeholder="Please input">
                                            <template slot="append">
                                                <div>期</div>
                                            </template>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="楼栋号">
                                        <el-input v-model="baseArg.buildingNumber" placeholder="Please input">
                                            <template slot="append">
                                                <div>号楼</div>
                                            </template>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="单元号">
                                        <el-input v-model="baseArg.unitNumber" placeholder="Please input">
                                            <template slot="append">
                                                <div>单元</div>
                                            </template>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="楼层总数">
                                        <el-input v-model="baseArg.floorNumber" placeholder="Please input">
                                            <template slot="append">
                                                <div>楼</div>
                                            </template>
                                        </el-input>
                                    </el-form-item>

                                    <el-form-item label="单层户数" >
                                        <el-select v-model="baseArg.singleFloorHouseholds" placeholder="Please select">
                                            <el-option v-for="item in HouseholdsList" :label="item.name" :value="item.number"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="预售均价">
                                        <el-input v-model="baseArg.averagePrice" placeholder="Please input">
                                            <template slot="append">
                                                <div>元/㎡</div>
                                            </template>
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>

                        <div class="item-box">
                            <div class="list-item-title">
                                <span>房号配置</span>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="count in Number(baseArg.singleFloorHouseholds || 0)">
                                    <div class="select-box flex gap-6">
                                        <div>{{count}}号房</div>
                                        <el-select v-model="baseArg.singleFloorHouseholds" placeholder="Please select">
                                            <el-option v-for="item in HouseholdsList" :label="item.name" :value="item.number"></el-option>
                                        </el-select>
                                        <el-select v-model="baseArg.singleFloorHouseholds" placeholder="Please select">
                                            <el-option v-for="item in HouseholdsList" :label="item.name" :value="item.number"></el-option>
                                        </el-select>
                                        <el-select v-model="baseArg.singleFloorHouseholds" placeholder="Please select">
                                            <el-option v-for="item in HouseholdsList" :label="item.name" :value="item.number"></el-option>
                                        </el-select>
                                        <el-select v-model="baseArg.singleFloorHouseholds" placeholder="Please select">
                                            <el-option v-for="item in HouseholdsList" :label="item.name" :value="item.number"></el-option>
                                        </el-select>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>

        <el-dialog
            :title="'添加'+addingInfo.name+'项'"
            :visible.sync="dialogVisible"
            width="30%">
            <el-form ref="form" :model="addingInfo" label-width="60px">
                <el-form-item :label="addingInfo.name">


                    <el-input v-if="addingInfo.unit" v-model="addingInfo.key">
                        <template slot="append">
                            <div>{{ addingInfo.unit }}</div>
                        </template>
                    </el-input>
                    <el-input v-else v-model="addingInfo.key"></el-input>
                </el-form-item>
                <el-form-item label="权重">
                    <el-input v-model="addingInfo.value"></el-input>
                </el-form-item>
            </el-form>


            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="confirmAdd(addingInfo.type)">确定</el-button>
        </el-dialog>

    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Slide from '@/components/Slide.vue'
import {Chart} from '@antv/g2';
import ImpactCategory from '../util/ImpactCategory';
import {f} from "core-js/internals/new-promise-capability";

export default {
    name: 'Home',
    components: {
        Header,
        Slide
    },
    data() {
        return {
            HouseholdsList:[
                {
                    number:1,
                    name:'一梯一户'
                },{
                    number:2,
                    name:'一梯两户'
                },{
                    number:4,
                    name:'两梯四户'
                },{
                    number:6,
                    name:'两梯六户'
                },
            ],
            baseArg:{
                period:'',
                buildingNumber:'',
                unitNumber:'',
                singleFloorHouseholds:'',
                averagePrice:'',
                floorNumber:'',
            },

            addingInfo:{
                unit:'',
                key:'',
                value:'',
                type:'',
                name:''
            },

            dialogVisible: false,
            area: ImpactCategory.area,
            toward: ImpactCategory.toward,
            landscape: ImpactCategory.landscape,
            houseType: ImpactCategory.houseType,
            floor: ImpactCategory.floor
        }
    },
    mounted() {


    },
    methods: {
        handleAdd(type,name,unit=''){
            this.addingInfo = {
                key:'',
                value:'',
                unit:unit,
                type:type,
                name:name
            }
            this.dialogVisible = true
        },
        confirmAdd(type){
            this[type] = this[type].concat({
                name: this.addingInfo.key + this.addingInfo.unit,
                score: this.addingInfo.value,
            })
            this.addingInfo = {
                key:'',
                value:'',
                type:'',
                unit:'',
                name:''
            }
            this.dialogVisible = false

        },
        handRemove(type,i) {
            if (this[type].length <= 1) {
                this.$notify.error({
                    title: '提示',
                    message: '至少保留一项'
                });
            } else {
                this[type].splice(i, 1)
            }
        }
    }
}
</script>
<style>
.chart-div img {
    display: block;
    padding: 4px 0;
}

.list-item-title {
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding-bottom: 12px;
}

.header-row {
    background-color: rgb(36 46 40) !important;
    color: #d7d7d7 !important;
}

.el-table .even-row {
    background-color: rgb(4, 20, 31) !important;
    color: #d7d7d7 !important;
    cursor: pointer;
}

.el-table .odd-row {
    background-color: #171f26 !important;
    color: #d7d7d7 !important;
    cursor: pointer;

}

.symbol-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    padding: 2.5px;
    margin-right: 4px;
}


.item-box {
    padding: 15px;
}


.list-wrapper {
    justify-content: space-between;
}

main {
    max-width: 1280px;
    margin: 0 auto;
}

.main-content {
    position: absolute;
    right: 0;
    left: 0;
    top: 65px;
    bottom: 0;
    padding: 20px 20px;
    overflow: auto;

}

.block-item-table-with-pagin {
    background: #242e28;
}

</style>
