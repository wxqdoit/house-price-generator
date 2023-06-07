<template>
    <div class="index">
        <div class="main-content">
            <main>
                <div class="token-box">
                    <div class="token-base-info flex">
                        <div class="token-item-col">
                            <div class="flex token-i-wrapper">
                                <div class="flex-1 flex token-des">
                                    <div class="token-logo">
                                        <img width="60px" src="https://www.gate.io/images/coin_icon/64/eth.png" alt="">
                                    </div>
                                    <div class="token-name">
                                        <div class="token-sym flex">
                                            <span class="token-symbol">ETH&nbsp;</span>
                                            <span class="token-flag token-like token-like-watched"><i class="el-icon-star-on"></i></span>
                                        </div>
                                        <div class="flex token-tag">
                                            <span class="token-rank">Rank #2</span>
                                            <span>CA: 0x3f31...122ff2&nbsp;<i class="el-icon-document-copy"></i></span>
                                            <span>Chain</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex-1 token-stats-item">
                                    <div class="token-stats-name">Ethereum Price <i class="el-icon-question"></i></div>
                                    <div class="flex token-price-value">
                                        <div class="token-stats-num t-plus">$
                                            <countTo :startVal='0' :endVal='3001.24' :duration='2000'></countTo>
                                        </div>
                                        <div class="token-stats-percentage token-stats-per-plus danger">
                                            <span><i class="el-icon-sort-down"></i></span>
                                            <span>5.34%(24h)</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="token-price-bar flex">
                                            <div class="bar-text">L:$1,71107.60</div>
                                            <div class="bar-box">
                                                <div class="inner-bar-box"></div>
                                            </div>
                                            <div class="bar-text">H:$124,89</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex-1">
                                    <h3 class="coin-addition">Social Links</h3>
                                    <div class="s-links-box flex">
                                        <a class="token-flag token-like" href="https://ethereum.org/en/">
                                            <span><i class="el-icon-link"></i>&nbsp;Website</span>
                                        </a>
                                        <a class="token-flag token-like" href="https://ethereum.org/en/">
                                            <span><i class="el-icon-help"></i>&nbsp;Explorer</span>
                                        </a>
                                        <a class="token-flag token-like" href="https://ethereum.org/en/">
                                            <span><i class="el-icon-chat-dot-square"></i>&nbsp;Twitter</span>
                                        </a>
                                        <a class="token-flag token-like" href="https://ethereum.org/en/">
                                            <span><i class="el-icon-document"></i>&nbsp;WhitePaper</span>
                                        </a>
                                        <a class="token-flag token-like" href="https://ethereum.org/en/">
                                            <span><i class="el-icon-link"></i>&nbsp;Website</span>
                                        </a>
                                        <a class="token-flag token-like" href="https://ethereum.org/en/">
                                            <span><i class="el-icon-help"></i>&nbsp;Explorer</span>
                                        </a>

                                    </div>
                                </div>
                                <div class="flex-1 token-more-stats">
                                    <div class="token-vol-box flex">
                                        <div class="token-stats-item">
                                            <div class="token-stats-name">Total Liquidity Pool <i class="el-icon-question"></i></div>
                                            <div class="flex">
                                                <div class="token-stats-num"><countTo :startVal='0' :endVal='3001222' :duration='2000'></countTo>
                                                </div>
                                                <div class="token-stats-percentage">
                                                    <span><i class="el-icon-sort-up"></i></span>
                                                    <span>5.34%(24h)</span>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div class="token-stats-item">
                                            <div class="token-stats-name">Transaction Volume <i class="el-icon-question"></i></div>
                                            <div class="flex">
                                                <div class="token-stats-num">$
                                                    <countTo :startVal='0' :endVal='3001.24' :duration='2000'></countTo>
                                                </div>
                                                <div class="token-stats-percentage">
                                                    <span><i class="el-icon-sort-up"></i></span>
                                                    <span>5.34%(24h)</span>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="token-item-col token-stats flex">
                            <div class="token-stats-item">
                                <div class="token-stats-name">Address <i class="el-icon-question"></i></div>
                                <div class="flex">
                                    <div class="token-stats-num"><countTo :startVal='0' :endVal='3001222' :duration='2000'></countTo>
                                    </div>
                                    <div class="token-stats-percentage ">
                                        <span><i class="el-icon-sort-up"></i></span>
                                        <span>5.34%(24h)</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="token-stats-item">
                                <div class="token-stats-name">Volume <i class="el-icon-question"></i></div>
                                <div class="flex">
                                    <div class="token-stats-num">$
                                        <countTo :startVal='0' :endVal='3001.24' :duration='2000'></countTo>
                                    </div>
                                    <div class="token-stats-percentage danger">
                                        <span><i class="el-icon-sort-down"></i></span>
                                        <span>5.34%(24h)</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="token-stats-item">
                                <div class="token-stats-name">Total Supply <i class="el-icon-question"></i></div>
                                <div class="flex">
                                    <div class="token-stats-num">
                                        <countTo :startVal='0' :endVal='1202221524' :duration='2000'></countTo>
                                    </div>
                                    <div class="token-stats-percentage danger">
                                        <span><i class="el-icon-sort-down"></i></span>
                                        <span>5.34%(24h)</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="token-stats-item">
                                <div class="token-stats-name">Market Cap <i class="el-icon-question"></i></div>
                                <div class="flex">
                                    <div class="token-stats-num">$
                                        <countTo :startVal='0' :endVal='361542820846' :duration='2000'></countTo>
                                    </div>
                                    <div class="token-stats-percentage">
                                        <span><i class="el-icon-sort-up"></i></span>
                                        <span>5.34%(24h)</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="token-stats-item">
                                <div class="token-stats-name">Total Supply <i class="el-icon-question"></i></div>
                                <div class="flex">
                                    <div class="token-stats-num">
                                        <countTo :startVal='0' :endVal='1204573341524' :duration='2000'></countTo>
                                    </div>
                                    <div class="token-stats-percentage">
                                        <span><i class="el-icon-sort-up"></i></span>
                                        <span>5.34%(24h)</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="token-stats-item">
                                <div class="token-stats-name">Market Cap <i class="el-icon-question"></i></div>
                                <div class="flex">
                                    <div class="token-stats-num">$
                                        <countTo :startVal='0' :endVal='361542820846' :duration='2000'></countTo>
                                    </div>
                                    <div class="token-stats-percentage">
                                        <span><i class="el-icon-sort-up"></i></span>
                                        <span>5.34%(24h)</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div class="flex-1 display-none token-more-stats">
                                <div class="just-between token-vol-box flex">
                                    <div class="token-stats-item">
                                        <div class="token-stats-name">Total Liquidity Pool <i class="el-icon-question"></i></div>
                                        <div class="flex">
                                            <div class="token-stats-num"><countTo :startVal='0' :endVal='3001222' :duration='2000'></countTo>
                                            </div>
                                            <div class="token-stats-percentage">
                                                <span><i class="el-icon-sort-up"></i></span>
                                                <span>5.34%(24h)</span>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div class="token-stats-item">
                                        <div class="token-stats-name">Transaction Volume <i class="el-icon-question"></i></div>
                                        <div class="flex">
                                            <div class="token-stats-num">$
                                                <countTo :startVal='0' :endVal='3001.24' :duration='2000'></countTo>
                                            </div>
                                            <div class="token-stats-percentage">
                                                <span><i class="el-icon-sort-up"></i></span>
                                                <span>5.34%(24h)</span>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="block-item">
                    <div class="item-box">
                        <div class="list-item-title"><span>Contracts Deployed per Month</span></div>

                        <div class="list-item-body ">
                            <div class="contracts-chart" id="contracts-chart"></div>
                        </div>
                    </div>
                </div>
                <div class="block-item">
                    <div class="item-box">
                        <div class="list-item-title"><span>Contracts Deployed per Month</span></div>

                        <div class="list-item-body ">
                            <div class="contracts-chart" id="exchange-chart"></div>
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
                            <div class="list-item-body">
                                <div class="gas-chart" id="gas-chart-eip1"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import DataSet from '@antv/data-set';
import countTo from 'vue-count-to';
import {Chart} from '@antv/g2';

export default {
    name: 'Home',
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
        this.buildAreaLineChart('contracts-chart')
        this.buildAreaLineChart('gas-chart-eip')
        this.buildAreaLineChart('gas-chart-eip1')
        this.dragAreaChart('exchange-chart')


    },
    methods: {

        dragAreaChart(container){
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/rain-flow.json')
                .then((res) => res.json())
                .then((data) => {
                    const ds = new DataSet({
                        state: {
                            start: new Date('2009/7/20 0:00').getTime(),
                            end: new Date('2009/9/9 0:00').getTime(),
                        },
                    });
                    const dv = ds.createView('origin').source(data);
                    dv.transform({
                        type: 'filter',
                        callback: function callback(obj) {
                            const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                            return time >= ds.state.start && time <= ds.state.end;
                        },
                    });

                    const chart = new Chart({
                        container: container,
                        autoFit: true,
                        height: 360,
                        padding: [36, 30, 64],
                    });

                    chart.data(dv.rows);
                    chart.scale({
                        time: {
                            type: 'time',
                            tickCount: 8,
                            mask: 'M/DD HH:mm'
                        },
                        flow: {
                            alias: '流量(m^3/s)',
                            tickInterval: 50,
                            max: 300,
                            min: 0
                        },
                        rain: {
                            alias: '降雨量(mm)',
                            min: 0,
                            max: 12,
                            tickInterval: 2,
                        },
                    });
                    chart.axis('time', {
                        label: {
                            style: {
                                fontSize: 12,
                                fill: '#c9c9c9',
                            }
                        },

                    });
                    chart.axis('rain', {
                        label: {
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
                    chart.axis('flow', {
                        grid: {
                            line: {
                                style: {
                                    stroke: 'rgba(88, 209 ,201 , 0.3)',
                                    lineWidth: 1,
                                },

                            },
                        },
                        label: {
                            style: {
                                fontSize: 12,
                                fill: '#c9c9c9',
                            }
                        },
                    });

                    chart.legend({
                        position: 'top',
                        custom: true, // 自定义图例
                        offsetY: -5,
                        itemName: {
                            style: {
                                fill: '#d4d4d4',
                                fontSize: 14
                            }
                        },
                        items: [
                            {
                                name: 'flow',
                                value: 'flow',
                                marker: { symbol: 'circle', style: { fill: 'l(100) 0:#ff4900 1:#fee5d9', r: 5 } },
                            },
                            {
                                name: 'rain',
                                value: 'rain',
                                marker: { symbol: 'circle', style: { fill: 'l(100) 0:#293c55 1:#f7f7f7', r: 5 } },
                            },
                        ],
                    });

                    chart.tooltip({
                        showCrosshairs: true,
                        shared: true,
                    });

                    chart.option('slider', {
                        start: 0,
                        end: 1,
                        height:30,
                        padding:[5,0,0,0],
                        trendCfg: {
                            isArea: false,
                            smooth:true,
                            backgroundStyle:{
                                lineWidth:0,
                                fontSize:18
                            },
                            lineStyle:{
                                fill:'#3e5858'
                            }
                        },
                        textStyle:{
                            fill:"#fff"
                        },
                        foregroundStyle:{
                            fill:"#438481"
                        },
                        backgroundStyle:{
                            fill:"#b1d9d7"
                        },
                        handlerStyle:{
                            fill:"#e0e0e0"
                        }
                    });

                    chart
                        .area()
                        .position('time*flow')
                        .color('l(100) 0:#ff4900 1:#fee5d9');
                    chart
                        .area()
                        .position('time*rain')
                        .color('l(100) 0:#05efba 1:#f7f7f7');

                    chart.interaction('element-visible-filter');

                    chart.render();
                });

        },

        buildAreaLineChart(container) {
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/fireworks-sales.json')
                .then(res => res.json())
                .then(data => {
                    const chart = new Chart({
                        container: container,
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
                            formatter(text) {
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
    }
}
</script>
<style>
.token-vol-box{
    flex-wrap: wrap;

}

.coin-addition{
    font-size: 14px;
    line-height: 24px;
    color: rgb(184, 186, 188);
}
.bar-text {
    height: 22px;
    line-height: 22px;
}

.bar-box {
    height: 8px;
    padding: 7px 4px;
}

.token-item-col {

}

.token-price-bar {
    padding: 6px 0;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    color: #eeeeee;
}

.inner-bar-box::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    top: 10px;
    left: 75px;
    border-width: 0 5px 8px 5px;
    border-color: transparent transparent #55cbba transparent;

}

.inner-bar-box::before {
    content: '';
    display: block;
    position: absolute;
    width: 80px;
    height: 8px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    background-color: #cecece;

}

.inner-bar-box {
    position: relative;
    height: 8px;
    width: 100px;
    background-color: #666666;
    border-radius: 4px;
}

.token-stats {
    flex-wrap: wrap;
    flex: 0 0 470px;
}
.token-stats-item{
    margin: 5px;
    position: relative;
}
.token-stats .token-stats-item {
    overflow: hidden;
    width: 220px;
}

.token-price-base-chart {
    width: 50%;
}

.t-plus {
    font-size: 26px !important;
    font-weight: bold;
}

.token-stats-per-plus {
    line-height: 38px !important;

}

.token-stats-percentage {
    font-size: 12px;
    line-height: 32px;
    height: 32px;

    color: #1de9b6;
}

.token-stats .token-stats-name {

}

.token-stats .token-stats-item {
    /*padding: 10px 0px 10px 15px;*/
    padding-left: 5px;
}

.token-stats-num {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.85);
    line-height: 32px;
    height: 32px;

    font-weight: bold;
    white-space: nowrap;
}

.token-i-wrapper {
    justify-content: space-between;
    margin-bottom: 10px;
}
.token-price-value{
 margin-top: 4px;
}
.token-stats-name {
    font-size: 12px;
    line-height: 20px;
    color: rgb(184, 186, 188);
    white-space: nowrap;
}

.token-stats-name i {
    font-size: 14px;
    cursor: pointer;
}

.token-sym span{
    display: block;
}
.token-symbol {
    font-weight: bold;
    color: #ffffff;
    font-size: 26px;
    line-height: 36px;

}

.token-logo {
    margin-right: 15px;
}

.token-des {
    margin: 5px;
    min-width: 250px;
    flex: 1;
}

.token-box {
    padding: 15px;
}

.token-name {
    font-size: 12px;
}

.token-name div:first-child {
    color: #cbcbcb;
    flex-wrap: wrap;
}

.token-base-info {
    padding: 20px;
    background: rgb(36 46 40);
    justify-content: space-between!important;
}
.token-vol-box .token-stats-item{
    padding-right: 5px;
}

.token-tag span {
    display: inline-block;
    padding: 4px 12px;
    background: #484848;
    line-height: 12px;
    /*height: 12px;*/
    margin-right: 5px;
    font-size: 12px;
    color: #9f9f9f;
    border-radius: 4px;
    transition: all 0.2s;
    margin-bottom: 5px;
}

.token-tag span:hover {
    background: #5e5e5e;
    color: #b3b3b3;
    transition: all 0.2s;
}

.token-like-watched{
    background-color: #20877e!important;
    color: #ffffff!important;
}

.el-icon-document-copy {
    cursor: pointer;
}

.el-icon-document-copy:hover {
    color: #ffffff;
}
</style>
