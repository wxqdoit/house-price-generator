<template>
    <div class="index">
        <div class="main-content">
            <main>
                <div class="gas-main">
                    <div class="gas-overview flex">
                        <div class="gas-o-item">
                            <div class="gas-o-i-name">Total 1h Gas Fees</div>
                            <div class="gas-eth-usage">
                                <countTo :startVal='0' :endVal='1621' :duration='2000'></countTo>ETH
                            </div>
                            <div class="gas-trend">
                                <span class="success"><i class="el-icon-sort-up"></i>13% </span>
                                <span>• was 186 ETH last hour</span>
                            </div>
                        </div>
                        <div class="gas-o-item">
                            <div class="gas-o-i-name">Total 1h Gas Fees</div>
                            <div class="gas-eth-usage">
                                <countTo :startVal='0' :endVal='1212' :duration='2000'></countTo>ETH
                            </div>
                            <div class="gas-trend">
                                <span class="danger"><i class="el-icon-sort-down"></i>-13% </span>
                                <span>• was 186 ETH last hour</span>
                            </div>
                        </div>
                        <div class="gas-o-item">
                            <div class="gas-o-i-name">Total 1h Gas Fees</div>
                            <div class="gas-eth-usage">
                                <countTo :startVal='0' :endVal='212' :duration='2000'></countTo>ETH
                            </div>
                            <div class="gas-trend">
                                <span class="success"><i class="el-icon-sort-up"></i>13% </span>
                                <span>• was 186 ETH last hour</span>
                            </div>
                        </div>
                    </div>
                    <div class="list-wrapper flex">
                        <div class="list-item-col">
                            <div class="item-box">
                                <div class="list-item-title flex">
                                    <div><span>Median Gas Price</span></div>
                                    <div><i></i></div>
                                </div>
                                <div class="list-item-body">
                                    <div class="gas-chart" id="gas-chart-price"></div>
                                </div>
                            </div>
                        </div>
                        <div class="list-item-col">
                            <div class="item-box">
                                <div class="list-item-title flex">
                                    <div><span>New listing rise in the short term</span></div>
                                    <div><i></i></div>
                                </div>
                                <div class="list-item-body-table">
                                    <el-table
                                        :data="newCoinList"
                                        height="368"
                                        header-cell-class-name="header-row"
                                        :row-class-name="tableRowClassName"
                                        :default-sort="{prop: 'date', order: 'descending'}">
                                        <el-table-column
                                            fixed
                                            prop="symbol"
                                            label="Symbol"
                                            width="120">
                                            <template slot-scope="scope">
                                                <img class="symbol-icon" :src="scope.row.symbolLogo" alt="">
                                                <span>{{ scope.row.symbol }}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="onlineTime"
                                            label="List Date"
                                            sortable
                                            width="160">
                                            <template slot-scope="scope">
                                                {{ $moment(scope.row.onlineTime).format('YYYY-MM-DD HH:mm:ss') }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="increase24h"
                                            min-width="160"
                                            label="Change 24hr">
                                            <template slot-scope="scope">
                                        <span v-if="scope.row.increase24h === '' ||
                                         scope.row.increase24h === undefined ||
                                         scope.row.increase24h === null">--</span>
                                                <span v-else :class="{
                                            'success':Number(scope.row.increase24h)>=0,
                                            'danger':Number(scope.row.increase24h)<0
                                        }">{{ scope.row.increase24h }}%</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="increase4h"
                                            min-width="160"
                                            label="Change 4hr">
                                            <template slot-scope="scope">
                                        <span v-if="scope.row.increase4h === '' ||
                                         scope.row.increase4h === undefined ||
                                         scope.row.increase4h === null">--</span>
                                                <span v-else :class="{
                                            'success':Number(scope.row.increase4h)>=0,
                                            'danger':Number(scope.row.increase4h)<0
                                        }">{{ scope.row.increase4h }}%</span>
                                            </template>
                                        </el-table-column>
                                    </el-table>

                                    <div class="pagination-block flex">
                                        <div></div>
                                        <el-pagination
                                            small
                                            layout="prev, pager, next"
                                            :total="1000">
                                        </el-pagination>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="list-wrapper flex">
                        <div class="list-item-col">
                            <div class="item-box">
                                <div class="list-item-title flex">
                                    <div><span>EIP 1559: Transaction Adoption</span></div>
                                    <div><i></i></div>
                                </div>
                                <div class="list-item-body">
                                    <div class="gas-chart" id="gas-chart-eip"></div>
                                </div>
                            </div>
                        </div>

                        <div class="list-item-col">
                            <div class="item-box">
                                <div class="list-item-title flex">
                                    <div><span>Gas Consumer Entities</span></div>
                                    <div><i></i></div>
                                </div>
                                <div class="list-item-body-table">
                                    <el-table
                                        :data="newCoinList"
                                        height="368"
                                        header-cell-class-name="header-row"
                                        :row-class-name="tableRowClassName"
                                        :default-sort="{prop: 'date', order: 'descending'}">
                                        <el-table-column
                                            fixed
                                            prop="symbol"
                                            label="Symbol"
                                            width="120">
                                            <template slot-scope="scope">
                                                <img class="symbol-icon" :src="scope.row.symbolLogo" alt="">
                                                <span>{{ scope.row.symbol }}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="onlineTime"
                                            label="List Date"
                                            sortable
                                            width="160">
                                            <template slot-scope="scope">
                                                {{ $moment(scope.row.onlineTime).format('YYYY-MM-DD HH:mm:ss') }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="increase24h"
                                            min-width="160"
                                            label="Change 24hr">
                                            <template slot-scope="scope">
                                                <div class="p-bar">
                                                    <el-progress :color="'rgba(0, 241, 235, 0.7)'" :percentage="parseInt(Math.random()*100)"></el-progress>
                                                </div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="increase4h"
                                            min-width="160"
                                            label="Change 4hr">
                                            <template slot-scope="scope">
                                                <div class="p-bar">
                                                    <el-progress :color="'rgba(0, 241, 235, 0.7)'" :percentage="parseInt(Math.random()*100)"></el-progress>
                                                </div>
                                            </template>
                                        </el-table-column>
                                    </el-table>

                                    <div class="pagination-block flex">
                                        <div></div>
                                        <el-pagination
                                            small
                                            layout="prev, pager, next"
                                            :total="1000">
                                        </el-pagination>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    </div>
</template>

<script>

import {Chart} from '@antv/g2';
import countTo from 'vue-count-to';

export default {
    name: 'Gas',
    components: {

        countTo
    },
    data() {
        return {
            newCoinList: [],
            queryNewCoinArg: {
                pageNo: 1,
                pageSize: 8,
            },
        }
    },
    mounted() {
        this.buildAreaLineChart()

        this.getNewCoinList(this.queryNewCoinArg)
        this.buildLineChart()

    },
    methods: {
        buildAreaLineChart() {
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/fireworks-sales.json')
                .then(res => res.json())
                .then(data => {
                    const chart = new Chart({
                        container: 'gas-chart-price',
                        autoFit: true,
                        height: 360,

                    });
                    chart.data(data);
                    chart.scale('Data', {
                        range: [0, 1],
                        tickCount: 10,
                        type: 'timeCat'
                    });
                    chart.scale('sales', {
                        nice: true,
                    });
                    chart.axis('sales', {
                        label: {
                            formatter(text){
                                return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                            },
                            style: {
                                fontSize: 12,
                                fill: '#c9c9c9',
                            }
                        },
                        grid: {
                            line: {
                                style: {
                                    stroke: 'rgba(88, 209 ,201 , 0.3)',
                                    lineWidth: 1,
                                },

                            },
                        }
                    });
                    chart.axis('Data', {
                        label: {
                            style: {
                                fontSize: 12,
                                fill: '#c9c9c9',
                            }
                        },
                    })
                    chart.tooltip({
                        showCrosshairs: true,
                    });
                    chart.line().position('Data*sales').color('rgba(0,241,235,1)');
                    chart.area().position('Data*sales').color('l(90) 0:rgba(0,241,235,1) 1:rgba(0,241,235,0.3)');
                    chart.render();
                });
        },
        buildLineChart() {
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/fireworks-sales.json')
                .then(res => res.json())
                .then(data => {
                    const chart = new Chart({
                        container: 'gas-chart-eip',
                        autoFit: true,
                        height: 360,

                    });
                    let d = data.reverse()
                    chart.data(d);
                    chart.scale('Data', {
                        range: [0, 1],
                        tickCount: 10,
                        type: 'timeCat'
                    });
                    chart.scale('sales', {
                        nice: true,
                    });
                    chart.axis('sales', {
                        label: {
                            formatter(text){
                                return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                            },
                            style: {
                                fontSize: 12,
                                fill: '#c9c9c9',
                            }
                        },
                        grid: {
                            line: {
                                style: {
                                    stroke: 'rgba(88, 209 ,201 , 0.3)',
                                    lineWidth: 1,
                                },

                            },
                        }
                    });
                    chart.axis('Data', {
                        label: {
                            style: {
                                fontSize: 12,
                                fill: '#c9c9c9',
                            }
                        },
                    })
                    chart.tooltip({
                        showCrosshairs: true,
                    });
                    chart.line().position('Data*sales').color('rgba(0,241,235,1)');
                    chart.render();
                });
        },
        tableRowClassName({row, rowIndex}) {
            return rowIndex % 2 === 0 ? 'even-row' : 'odd-row'
        },
        getNewCoinList(arg) {
            this.$root.api.getNewCoinList(arg).then(res => {
                res.data.list.length = 8
                this.newCoinList = res.data.list
                console.log(this.newCoinList)
            }).catch(err => {
            })
        },
    }
}
</script>
<style>
.p-bar{
    width: 150px;
}
.gas-overview {
    padding: 15px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.gas-main {
    padding: 15px 0;
}
.gas-main .list-item-body{
    height: 368px;
    overflow: hidden;
}
.gas-o-item:hover {
    background: #2b362e;
    transition: background 0.2s;
}

.gas-o-item {
    padding: 20px 10px;
    border-radius: 4px;
    background: rgb(36 46 40);
    transition: background 0.2s;
    margin-right: 30px;
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
}

.gas-o-item:last-child {
    margin-right: 0;
}

.gas-o-i-name {
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 8px;
    text-align: center;
    color: #d7d7d7
}

.gas-eth-usage {
    font-size: 24px;
    padding: 5px;
    line-height: 32px;
    font-family: "IBM Plex Mono";
    margin-bottom: 0px;
    overflow-wrap: break-word;
    max-width: 100%;
    text-align: center;
    color: #fff;
}

.gas-trend {
    text-align: center;
}

.gas-trend span:last-child {
    color: rgb(96, 114, 128);
}

.gas-trend span {
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
}
</style>
