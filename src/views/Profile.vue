<template>
    <div class="index">
        <div class="main-content">
            <main>
                <div class="block-item">
                    <div class="item-box">
                        <div class="list-item-title"><span>Contracts Deployed per Month</span></div>

                        <div class="list-item-body ">
                            <div class="contracts-chart" id="contracts-chart"></div>
                        </div>
                    </div>
                </div>
                <div class="list-wrapper flex">
                    <div class="list-item-col">
                        <div class="item-box">
                            <div class="list-item-title flex">
                                <div><span>New listing rise in the short term</span></div>
                                <div><i></i></div>
                            </div>
                            <div class="list-item-body">
                                <div class="pie-chart" id="eth-pie-tracker"></div>
                            </div>
                        </div>


                    </div>
                    <div class="list-item-col">
                        <div class="item-box">
                            <div class="list-item-title flex">
                                <div><span>New listing rise in the short term</span></div>
                                <div><i></i></div>
                            </div>
                            <div class="list-item-body">
                                <div class="db-line-chart" id="db-line-chart"></div>
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

export default {
    name: 'Home',

    data() {
        return {}
    },
    mounted() {
        this.buildPieChart()
        this.buildDbLineChart()
        this.buildColumnChart()
    },
    methods: {
        buildPieChart() {
            const data = [
                {item: 'Coinbase', count: 20, percent: 0.1},
                {item: 'Binance', count: 40, percent: 0.2},
                {item: 'Gemini', count: 40, percent: 0.2},
                {item: 'Kraken', count: 60, percent: 0.3},
                {item: 'Bitfinex', count: 10, percent: 0.05},
                {item: 'Curve.fi', count: 10, percent: 0.05},
                {item: 'Upbit', count: 20, percent: 0.1},
            ];
            const chart = new Chart({
                container: 'eth-pie-tracker',
                autoFit: true,
                height: 360,
                padding: [0, 10, 10, 150]
            });
            chart.data(data);
            chart.legend('item', {
                itemHeight: 20,
                position: 'left',
                offsetX: 20,
                itemName: {
                    style: {
                        fill: '#ffffff',
                        fontSize: 14

                    }
                },

            });
            chart.scale('percent', {
                formatter: (val) => {
                    val = val * 100 + '%';
                    return val;
                },
            });
            chart.coordinate('theta', {
                radius: 0.80,
                innerRadius: 0.73,
            });
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
                itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
            });
            // 辅助文本
            chart
                .annotation()
                .text({
                    position: ['50%', '50%'],
                    content: '20.26M',
                    style: {
                        fontSize: 22,
                        fill: '#ffffff',
                        textAlign: 'center',
                    },
                    offsetY: -10,
                })
                .text({
                    position: ['50%', '50%'],
                    content: 'Total',
                    style: {
                        fontSize: 16,
                        fill: '#8c8c8c',
                        textAlign: 'center',
                    },
                    offsetY: 20,
                })

            chart
                .interval()
                .adjust('stack')
                .position('percent')
                .color('item')


            chart.interaction('element-active');

            chart.render();

        },
        buildColumnChart() {

            const data = [
                {name: 'Empty Contract', mon: '2020.01', val: 18.9},
                {name: 'Empty Contract', mon: '2020.02', val: 28.8},
                {name: 'Empty Contract', mon: '2020.03', val: 39.3},
                {name: 'Empty Contract', mon: '2020.04', val: 81.4},
                {name: 'Empty Contract', mon: '2020.05', val: 47},
                {name: 'Empty Contract', mon: '2020.06', val: 20.3},
                {name: 'Empty Contract', mon: '2020.07', val: 24},
                {name: 'Empty Contract', mon: '2020.08', val: 35.6},
                {name: 'Empty Contract', mon: '2020.09', val: 35.6},
                {name: 'Empty Contract', mon: '2020.10', val: 35.6},
                {name: 'Empty Contract', mon: '2020.11', val: 35.6},
                {name: 'Empty Contract', mon: '2020.12', val: 35.6},
                {name: 'Empty Contract', mon: '2021.01', val: 18.9},
                {name: 'Empty Contract', mon: '2021.02', val: 28.8},
                {name: 'Empty Contract', mon: '2021.03', val: 39.3},
                {name: 'Empty Contract', mon: '2021.04', val: 81.4},
                {name: 'Empty Contract', mon: '2021.05', val: 47},
                {name: 'Empty Contract', mon: '2021.06', val: 20.3},
                {name: 'Empty Contract', mon: '2021.07', val: 24},
                {name: 'Empty Contract', mon: '2021.08', val: 35.6},
                {name: 'Empty Contract', mon: '2021.09', val: 35.6},
                {name: 'Empty Contract', mon: '2021.10', val: 35.6},
                {name: 'Empty Contract', mon: '2021.11', val: 35.6},
                {name: 'Empty Contract', mon: '2021.12', val: 35.6},
                {name: 'Empty Contract', mon: '2022.01', val: 18.9},
                {name: 'Empty Contract', mon: '2022.02', val: 28.8},
                {name: 'Empty Contract', mon: '2022.03', val: 39.3},
                {name: 'Empty Contract', mon: '2022.04', val: 81.4},
                {name: 'Empty Contract', mon: '2022.05', val: 47},
                {name: 'Empty Contract', mon: '2022.06', val: 20.3},
                {name: 'Empty Contract', mon: '2022.07', val: 24},
                {name: 'Empty Contract', mon: '2022.08', val: 35.6},
                {name: 'Empty Contract', mon: '2022.09', val: 35.6},
                {name: 'Empty Contract', mon: '2022.10', val: 35.6},
                {name: 'Empty Contract', mon: '2022.11', val: 35.6},
                {name: 'Empty Contract', mon: '2022.12', val: 35.6},

                {name: 'GasToken', mon: '2020.01', val: 18.9},
                {name: 'GasToken', mon: '2020.02', val: 28.8},
                {name: 'GasToken', mon: '2020.03', val: 39.3},
                {name: 'GasToken', mon: '2020.04', val: 81.4},
                {name: 'GasToken', mon: '2020.05', val: 47},
                {name: 'GasToken', mon: '2020.06', val: 20.3},
                {name: 'GasToken', mon: '2020.07', val: 24},
                {name: 'GasToken', mon: '2020.08', val: 35.6},
                {name: 'GasToken', mon: '2020.09', val: 35.6},
                {name: 'GasToken', mon: '2020.10', val: 35.6},
                {name: 'GasToken', mon: '2020.11', val: 35.6},
                {name: 'GasToken', mon: '2020.12', val: 35.6},
                {name: 'GasToken', mon: '2021.01', val: 18.9},
                {name: 'GasToken', mon: '2021.02', val: 28.8},
                {name: 'GasToken', mon: '2021.03', val: 39.3},
                {name: 'GasToken', mon: '2021.04', val: 81.4},
                {name: 'GasToken', mon: '2021.05', val: 47},
                {name: 'GasToken', mon: '2021.06', val: 20.3},
                {name: 'GasToken', mon: '2021.07', val: 24},
                {name: 'GasToken', mon: '2021.08', val: 35.6},
                {name: 'GasToken', mon: '2021.09', val: 35.6},
                {name: 'GasToken', mon: '2021.10', val: 35.6},
                {name: 'GasToken', mon: '2021.11', val: 35.6},
                {name: 'GasToken', mon: '2021.12', val: 35.6},
                {name: 'GasToken', mon: '2022.01', val: 18.9},
                {name: 'GasToken', mon: '2022.02', val: 28.8},
                {name: 'GasToken', mon: '2022.03', val: 39.3},
                {name: 'GasToken', mon: '2022.04', val: 81.4},
                {name: 'GasToken', mon: '2022.05', val: 47},
                {name: 'GasToken', mon: '2022.06', val: 20.3},
                {name: 'GasToken', mon: '2022.07', val: 24},
                {name: 'GasToken', mon: '2022.08', val: 35.6},
                {name: 'GasToken', mon: '2022.09', val: 35.6},
                {name: 'GasToken', mon: '2022.10', val: 35.6},
                {name: 'GasToken', mon: '2022.11', val: 35.6},
                {name: 'GasToken', mon: '2022.12', val: 35.6},

                {name: 'ChiToken', mon: '2020.01', val: 18.9},
                {name: 'ChiToken', mon: '2020.02', val: 28.8},
                {name: 'ChiToken', mon: '2020.03', val: 39.3},
                {name: 'ChiToken', mon: '2020.04', val: 81.4},
                {name: 'ChiToken', mon: '2020.05', val: 47},
                {name: 'ChiToken', mon: '2020.06', val: 20.3},
                {name: 'ChiToken', mon: '2020.07', val: 24},
                {name: 'ChiToken', mon: '2020.08', val: 35.6},
                {name: 'ChiToken', mon: '2020.09', val: 35.6},
                {name: 'ChiToken', mon: '2020.10', val: 35.6},
                {name: 'ChiToken', mon: '2020.11', val: 35.6},
                {name: 'ChiToken', mon: '2020.12', val: 35.6},
                {name: 'ChiToken', mon: '2021.01', val: 18.9},
                {name: 'ChiToken', mon: '2021.02', val: 28.8},
                {name: 'ChiToken', mon: '2021.03', val: 39.3},
                {name: 'ChiToken', mon: '2021.04', val: 81.4},
                {name: 'ChiToken', mon: '2021.05', val: 47},
                {name: 'ChiToken', mon: '2021.06', val: 20.3},
                {name: 'ChiToken', mon: '2021.07', val: 24},
                {name: 'ChiToken', mon: '2021.08', val: 35.6},
                {name: 'ChiToken', mon: '2021.09', val: 35.6},
                {name: 'ChiToken', mon: '2021.10', val: 35.6},
                {name: 'ChiToken', mon: '2021.11', val: 35.6},
                {name: 'ChiToken', mon: '2021.12', val: 35.6},
                {name: 'ChiToken', mon: '2022.01', val: 18.9},
                {name: 'ChiToken', mon: '2022.02', val: 28.8},
                {name: 'ChiToken', mon: '2022.03', val: 39.3},
                {name: 'ChiToken', mon: '2022.04', val: 81.4},
                {name: 'ChiToken', mon: '2022.05', val: 47},
                {name: 'ChiToken', mon: '2022.06', val: 20.3},
                {name: 'ChiToken', mon: '2022.07', val: 24},
                {name: 'ChiToken', mon: '2022.08', val: 35.6},
                {name: 'ChiToken', mon: '2022.09', val: 35.6},
                {name: 'ChiToken', mon: '2022.10', val: 35.6},
                {name: 'ChiToken', mon: '2022.11', val: 35.6},
                {name: 'ChiToken', mon: '2022.12', val: 35.6},
            ];

            const chart = new Chart({
                container: 'contracts-chart',
                autoFit: true,
                padding: [20, 10, 50, 30],
                height: 360,
            });
            chart.axis("mon", {
                label: {
                    style: {
                        fontSize: 12,
                        fill: '#adadad',
                    }
                },

            });

            chart.axis("val", {
                label: {
                    style: {
                        fontSize: 12,
                        fill: '#adadad',
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
            chart.data(data);
            chart.scale('val', {
                nice: true,
            });
            chart.tooltip({
                shared: true,
                showMarkers: false,
            });
            chart.legend('name', {
                itemName: {
                    style: {
                        fill: '#ffffff',
                        fontSize: 14
                    }
                },
            });
            chart
                .interval()
                .position('mon*val')
                .color('name')
                .adjust('stack');

            chart.interaction('active-region');

            chart.render();

        },
        buildDbLineChart() {
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json')
                .then(res => res.json())
                .then(data => {
                    const chart = new Chart({
                        container: 'db-line-chart',
                        autoFit: true,
                        height: 360,
                        padding: [30, 30, 50, 30]
                    });
                    chart.tooltip({
                        showCrosshairs: true,
                        shared: true,
                    });

                    chart.data(data);
                    chart.scale({
                        nlp: {
                            min: 0,
                            max: 100
                        },
                        blockchain: {
                            min: 0,
                            max: 100
                        }
                    });
                    chart.axis("date", {
                        label: {
                            style: {
                                fontSize: 12,
                                fill: '#adadad',
                            }
                        },
                    })
                    chart.axis('blockchain', {
                        grid: {
                            line: {
                                style: {
                                    stroke: 'rgba(88, 209 ,201 , 0.15)',
                                    lineWidth: 1,
                                },
                            },
                        }
                    })
                    chart.axis('nlp', {
                        label: {
                            style: {
                                fontSize: 12,
                                fill: '#adadad',
                            }
                        },
                        grid: {
                            line: {
                                style: {
                                    stroke: 'rgba(88, 209 ,201 , 0.15)',
                                    lineWidth: 1,
                                },

                            },
                        }
                    });

                    chart.legend({
                        custom: true,
                        textStyle: {
                            fill: 'rgba(255,255,255,.8)', // 文本的颜色
                            fontSize: '12', // 文本大小
                            fontWeight: 'bold', // 文本粗细
                        },
                        itemName: {
                            style: {
                                fill: '#ffffff',
                                fontSize: 14
                            }
                        },

                        items: [
                            {
                                name: 'block',
                                value: 'blockchain',
                                marker: {symbol: 'line', style: {stroke: '#fc9500', lineWidth: 2,fontSize: 16 }}
                            },
                            {
                                name: 'nlp',
                                value: 'nlp',

                                marker: {
                                    symbol: 'line',
                                    style: {
                                        stroke: '#00e1ea',
                                        lineWidth: 2,
                                        fontSize: 22,
                                    },

                                }
                            },
                        ],
                    });

                    chart.line().position('date*blockchain').color('#fc9500');
                    chart.line().position('date*nlp').color('#00e1ea');


                    chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
                    chart.render();
                });

        },
    }
}
</script>
<style>
.db-line-chart {
    height: 360px;
}


.pie-chart {
    max-width: 560px;
    margin: 0 auto;
}

</style>
