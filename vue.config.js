const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    publicPath:'./',
    outputDir:'dist',
    css:{extract: false,sourceMap:true},
    productionSourceMap: process.env.NODE_ENV !== 'production',
    chainWebpack: config=>{
        config.performance .set('hints', false);

    },
    devServer: {
        open: true,      // 启动服务后是否自动打开浏览器，true-每次启动都会打开新的
        port: 8101,      // 端口
        https: false,    // 是否启用https
        // host: '127.0.0.1',
        disableHostCheck: true
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$|\.woff$|\.ttf$|\.eot$|\.woff2$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型, //匹配文件名
                        threshold: 1024, //对超过1k的数据进行压缩
                        deleteOriginalAssets: false //是否删除原文件
                    }),
                    new TerserPlugin({
                        terserOptions: {
                            ecma: undefined,
                            warnings: false,
                            parse: {},
                            compress: {
                                drop_console: true,
                                drop_debugger: false, //是否删除debugger
                                pure_funcs: ['console.log'] // 移除console
                            }
                        }
                    })
                ]
            };

        }
    }

};