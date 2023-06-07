// 调整系数对象
let coefficients = {
    area: {
        '小': 0.8,
        '中': 1.0,
        '大': 1.2,
        '超大': 1.5
    },
    orientation: {
        '东': 1.0,
        '南': 1.1,
        '西': 0.9
    },
    floor: {
        '1层': 0.8,
        '2层': 0.9,
        '3层': 1.0,
        '4层': 1.1,
        '5层': 1.2,
        '6层': 1.3,
        '7层': 1.4
    },
    view: {
        '公园': 1.2,
        '湖景': 1.3,
        '山景': 1.1
    },
    layout: {
        '一室一厅': 0.9,
        '两室一厅': 1.0,
        '两室两厅': 1.1,
        '三室一厅': 1.2,
        '三室两厅': 1.3,
        '四室及以上': 1.4
    }
};

// 计算调整后的房价
function calculateAdjustedPrice(area, orientation, floor, view, layout) {
    let basePrice = 8000; // 基础价格8000元/平方米

    let areaCoefficient = coefficients.area[area];
    let orientationCoefficient = coefficients.orientation[orientation];
    let floorCoefficient = coefficients.floor[floor];
    let viewCoefficient = coefficients.view[view];
    let layoutCoefficient = coefficients.layout[layout];

    let adjustedPrice = basePrice * areaCoefficient * orientationCoefficient * floorCoefficient * viewCoefficient * layoutCoefficient;

    return adjustedPrice;
}

// 计算每一楼每个户型的调整后价格
function calculateFloorPrices() {
    let floors = ['1层', '2层', '3层', '4层', '5层', '6层', '7层']; // 总楼层
    let layouts = ['一室一厅', '两室一厅', '两室两厅', '三室一厅', '三室两厅', '四室及以上']; // 户型

    let targetAveragePrice = 8000; // 目标平均价格

    let floorPrices = {}; // 存储每一楼每个户型的调整后价格
    let totalAdjustedPrice = 0; // 总的调整后价格

    for (let floor of floors) {
        floorPrices[floor] = {};

        for (let layout of layouts) {
            let price = calculateAdjustedPrice('中', '南', floor, '公园', layout); // 假设面积为中、朝向为南、景观为公园
            floorPrices[floor][layout] = price.toFixed(2); // 保留两位小数，并存储到对应楼层和户型的价格对象中
            totalAdjustedPrice += price;
        }
    }

    let averageAdjustedPrice = totalAdjustedPrice / (floors.length * layouts.length); // 计算实际的平均价格

    // 根据实际平均价格和目标平均价格的差异，进行价格调整，直到达到目标平均价格
    while (averageAdjustedPrice !== targetAveragePrice) {
        let adjustmentRatio = targetAveragePrice / averageAdjustedPrice;

        for (let floor in floorPrices) {
            for (let layout in floorPrices[floor]) {
                floorPrices[floor][layout] = (floorPrices[floor][layout] * adjustmentRatio).toFixed(2);
            }
        }

        totalAdjustedPrice *= adjustmentRatio;
        averageAdjustedPrice = totalAdjustedPrice / (floors.length * layouts.length);
    }

    return floorPrices;
}

// 示例调用
let floorPrices = calculateFloorPrices();

// 打印每一楼每个户型的调整后价格
for (let floor in floorPrices) {
    console.log('楼层：', floor);
    for (let layout in floorPrices[floor]) {
        console.log('户型：', layout, '价格：', floorPrices[floor][layout], '元/平方米');
    }
    console.log('------------------');
}
