<template>
    <div class="index">
        <div class="main-content">
            <main>
                <div class="block-item">
                    <div class="flex">
                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>面积</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('area','面积','㎡')">增加
                                </el-button>
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
                                <el-button type="primary" size="mini" round @click="handleAdd('toward','朝向')">增加
                                </el-button>
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
                                <el-button type="primary" size="mini" round @click="handleAdd('landscape','景观')">
                                    增加
                                </el-button>
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
                                <el-button type="primary" size="mini" round @click="handleAdd('houseType','户型')">
                                    增加
                                </el-button>
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
                                <span>其他</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('other','其他')">增加
                                </el-button>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(otherItem,i) in other">
                                    <el-input placeholder="Please input" v-model="otherItem.score">
                                        <template slot="prepend">{{ otherItem.name }}</template>
                                        <template slot="append">
                                            <div @click="handRemove('other',i)"><i class="el-icon-delete"></i></div>
                                        </template>
                                    </el-input>
                                </div>
                            </div>
                        </div>

                        <div class="item-box">
                            <div class="list-item-title flex">
                                <span>楼层</span>
                                <el-button type="primary" size="mini" round @click="handleAdd('floor','楼层')">增加
                                </el-button>
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
                                    <el-form-item label="项目">
                                        <el-input v-model="baseArg.project" placeholder="Please input"></el-input>
                                    </el-form-item>
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

                                    <el-form-item label="单层户数">
                                        <el-select v-model="baseArg.singleFloorHouseholds"
                                                   @change="singleFloorHouseholdsChange" placeholder="Please select">
                                            <el-option v-for="item in HouseholdsList" :label="item.name"
                                                       :value="item.number"></el-option>
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

                        <div class="item-box flex-2">
                            <div class="list-item-title">
                                <span>房号配置</span>
                            </div>
                            <div class="flex-column gap-6">
                                <div v-for="(houseConfigInfoItem,i) in houseConfigInfo">
                                    <div class="select-box flex gap-6 align-items-center">
                                        <div>{{ i }}号房</div>
                                        <el-select v-model="houseConfigInfo[i].area" placeholder="选择面积">
                                            <el-option v-for="item in area" :label="item.name"
                                                       :value="item.name"></el-option>
                                        </el-select>
                                        <el-select v-model="houseConfigInfo[i].toward" placeholder="选择朝向">
                                            <el-option v-for="item in toward" :label="item.name"
                                                       :value="item.name"></el-option>
                                        </el-select>
                                        <el-select v-model="houseConfigInfo[i].landscape" placeholder="选择景观">
                                            <el-option v-for="item in landscape" :label="item.name"
                                                       :value="item.name"></el-option>
                                        </el-select>
                                        <el-select v-model="houseConfigInfo[i].houseType" placeholder="选择户型">
                                            <el-option v-for="item in houseType" :label="item.name"
                                                       :value="item.name"></el-option>
                                        </el-select>
                                        <el-select v-model="houseConfigInfo[i].other" placeholder="选择其他">
                                            <el-option v-for="item in other" :label="item.name"
                                                       :value="item.name"></el-option>
                                        </el-select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="block-item">
                    <div class="flex">
                        <div class="item-box flex-column gap-12">
                            <div class="list-item-title align-items-center flex gap-12">
                                <span>数据预览展示</span>

                            </div>
                            <div class="flex-base gap-12">
                                <div class="align-items-center flex">

                                    <el-radio-group v-model="radio">
                                        <el-radio :label="1">乘积加权</el-radio>
                                        <el-radio :label="2">线性加权</el-radio>
                                    </el-radio-group>
                                </div>


                                <el-button type="primary" size="mini" round @click="getResult">点击生成</el-button>
                            </div>

                            <div class="flex">
                                <span>{{baseArg.project}}项目{{baseArg.period}}期{{baseArg.buildingNumber}}栋{{baseArg.unitNumber}}单元价格表</span>
                                <div class="flex-base gap-12 align-items-center">
                                    <span>目标平均单价: {{baseArg.averagePrice}}</span>
                                    <span>当前平均单价: {{averageAdjustedPrice}}</span>
                                    <el-button type="primary" size="mini" round @click = 'autoAdjust'>自动调整平均价格</el-button>
                                </div>
                            </div>




                            <el-table
                                border
                                :data="tableData"
                                :row-class-name="tableRowClassName">
                                <el-table-column v-for="item in tableHeader"
                                    :prop="item.prop"
                                    :label="item.value">
                                </el-table-column>
                            </el-table>
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
            radio: 1,
            HouseholdsList: [
                {
                    number: 1,
                    name: '一梯一户'
                }, {
                    number: 2,
                    name: '一梯两户'
                }, {
                    number: 4,
                    name: '两梯四户'
                }, {
                    number: 6,
                    name: '两梯六户'
                },
            ],

            baseArg: {
                project:'城投锦溪城',
                period: '1',
                buildingNumber: '1',
                unitNumber: '1',
                singleFloorHouseholds: '',
                averagePrice: '10000',
            },
            houseConfigInfo: {},
            addingInfo: {
                unit: '',
                key: '',
                value: '',
                type: '',
                name: ''
            },

            dialogVisible: false,
            area: ImpactCategory.area,
            toward: ImpactCategory.toward,
            landscape: ImpactCategory.landscape,
            houseType: ImpactCategory.houseType,
            floor: ImpactCategory.floor,
            other: ImpactCategory.other,

            tableData: [],
            tableHeader:[],
            averageAdjustedPrice:'',
            floorPrices:null
        }
    },
    mounted() {


    },
    methods: {
        getResult() {
            for (let item in this.baseArg) {
                if (!this.baseArg[item]) {
                    this.$notify.error({
                        title: '提示',
                        message: '请完整填写基准参数'
                    });
                    return false
                }
            }



            this.floorPrices = this.calculateFloorPrices();



            let _tableHeader = [{
                prop:'floor',
                value:'楼层'
            }]
            // 遍历第一个楼层的对象，作为表头
            for (const key in this.floorPrices["1楼"]) {
                _tableHeader.push({
                    prop:key,
                    value:key
                })
            }
            this.tableHeader =_tableHeader



            let _tableData = []
            for (let floor in this.floorPrices) {
                let obj = {
                    floor:floor
                }

                for (let layout in this.floorPrices[floor]) {
                    obj[layout] = this.floorPrices[floor][layout].price

                }
                _tableData.push(obj)
            }
            this.tableData = _tableData


            console.log(this.floorPrices)


        },

        autoAdjust(){
            let adjustmentRatio = (this.baseArg.averagePrice-this.averageAdjustedPrice)/this.baseArg.averagePrice;
            let total = this.baseArg.averagePrice * this.floor.length *  Object.keys(this.houseConfigInfo).length
            let _total = this.averageAdjustedPrice * this.floor.length *  Object.keys(this.houseConfigInfo).length
            let k = 0
            console.log(adjustmentRatio)
            if(Math.abs(adjustmentRatio) > 0.001){
                console.log(adjustmentRatio)
                for (let floor in this.floorPrices) {
                    for (let layout in this.floorPrices[floor]) {
                        let oldPrice = this.floorPrices[floor][layout].price
                        let newPrice = parseInt(oldPrice+(oldPrice/_total)*(total-_total))
                        this.floorPrices[floor][layout].price = newPrice
                        k += newPrice
                    }
                }

                console.log(k)

                this.averageAdjustedPrice = parseInt(k/(this.floor.length *  Object.keys(this.houseConfigInfo).length))

                let _tableData = []
                for (let floor in this.floorPrices) {
                    let obj = {
                        floor:floor
                    }

                    for (let layout in this.floorPrices[floor]) {
                        obj[layout] = this.floorPrices[floor][layout].price

                    }
                    _tableData.push(obj)
                }
                this.tableData = _tableData

            }



        },

        // 计算调整后的房价
        /**
         * @param layout
         * @param floor 楼层
         * @returns {number}
         */

        // 计算每一楼每个户型的调整后价格
        calculateFloorPrices() {


            let housePrices = {}; // 存储每一楼每个户型的调整后价格
            let totalAdjustedPrice = 0; // 总的调整后价格



            for (let floorItem = 0; floorItem < this.floor.length; floorItem++) {
                housePrices[this.floor[floorItem].name] = {};

                for (let layout in this.houseConfigInfo) {

                    let data = this.calculateAdjustedPrice(layout);
                    let price = parseInt(this.genPrice(data,this.floor[floorItem].score))
                    housePrices[this.floor[floorItem].name][layout + '号房'] = {
                        area: data.area,
                        toward: data.toward,
                        landscape: data.landscape,
                        houseType: data.houseType,
                        other: data.other,
                        price:price
                    };
                    totalAdjustedPrice += price;
                }
            }


            this.averageAdjustedPrice = parseInt(totalAdjustedPrice / (this.floor.length * Object.keys(this.houseConfigInfo).length)); // 计算实际的平均价格

            // 根据实际平均价格和目标平均价格的差异，进行价格调整，直到达到目标平均价格
            // while (averageAdjustedPrice !== targetAveragePrice) {
            //     let adjustmentRatio = targetAveragePrice / averageAdjustedPrice;
            //
            //     for (let floor in housePrices) {
            //         for (let layout in housePrices[floor]) {
            //             housePrices[floor][layout] = (housePrices[floor][layout] * adjustmentRatio).toFixed(2);
            //         }
            //     }
            //
            //     totalAdjustedPrice *= adjustmentRatio;
            //     averageAdjustedPrice = totalAdjustedPrice / (this.floor.length * Object.keys(this.houseConfigInfo).length);
            // }

            return housePrices;
        },
        calculateAdjustedPrice(layout) {

            let area = this.area.filter((item, index) => {
                if (this.houseConfigInfo[layout].area) {
                    return item.name === this.houseConfigInfo[layout].area
                }
            });
            let toward = this.toward.filter((item, index) => {
                if (this.houseConfigInfo[layout].toward) {
                    return item.name === this.houseConfigInfo[layout].toward
                }
            });
            let landscape = this.landscape.filter((item, index) => {
                if (this.houseConfigInfo[layout].landscape) {
                    return item.name === this.houseConfigInfo[layout].landscape
                }
            });
            let houseType = this.houseType.filter((item, index) => {
                if (this.houseConfigInfo[layout].houseType) {
                    return item.name === this.houseConfigInfo[layout].houseType
                }
            });
            let other = this.other.filter((item, index) => {
                if (this.houseConfigInfo[layout].other) {
                    return item.name === this.houseConfigInfo[layout].other
                }
            });


            let d = {name:'',score:1}
            return {
                area:area.length? area[0]:d,
                toward:toward.length? toward[0]:d,
                landscape:landscape.length? landscape[0]:d,
                houseType:houseType.length? houseType[0]:d,
                other:other.length? other[0]:d,
            }
        },
        genPrice(data,floor){
            let area = data.area.score;
            let toward = data.toward.score;
            let landscape = data.landscape.score;
            let houseType = data.houseType.score;
            let other = data.other.score;



            let basePrice = Number(this.baseArg.averagePrice); // 基础价格
            let adjustedPrice = 0
            if (Number(this.radio) === 1) {
                adjustedPrice = (floor * area * toward * landscape * houseType * other) * basePrice;
            }
            if (Number(this.radio) === 2) {
                adjustedPrice = ((Number(floor) + Number(area) + Number(toward) + Number(landscape) + Number(houseType) + Number(other) - 6)) * basePrice + basePrice
            }
            return adjustedPrice

        },
        handleAdd(type, name, unit = '') {
            this.addingInfo = {
                key: '',
                value: '',
                unit: unit,
                type: type,
                name: name
            }
            this.dialogVisible = true
        },
        confirmAdd(type) {
            this[type] = this[type].concat({
                name: this.addingInfo.key + this.addingInfo.unit,
                score: this.addingInfo.value,
            })
            this.addingInfo = {
                key: '',
                value: '',
                type: '',
                unit: '',
                name: ''
            }
            this.dialogVisible = false

        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        },
        handRemove(type, i) {
            if (this[type].length <= 1) {
                this.$notify.error({
                    title: '提示',
                    message: '至少保留一项'
                });
            } else {
                this[type].splice(i, 1)
            }
        },
        singleFloorHouseholdsChange(val) {

            this.houseConfigInfo = {}
            let _val = Number(val)
            for (let i = 1; i <= _val; i++) {
                this.$set(this.houseConfigInfo, i, {
                    area: '',
                    toward: '',
                    landscape: '',
                    houseType: '',
                    other: '',
                })
            }
        },

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
