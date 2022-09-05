const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/index.ts',
  mode: 'production',
  // 出口文件
  output: {
    // 打包生成的文件目录
    path: path.resolve(__dirname, 'dist'),
    // 打包生成的文件名
    filename: 'bundle.js',

    // 配置环境，不适用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  // 指定webpack打包时所使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定以ts结尾的文件，适用当前规则
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 清空之前打包的文件
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}