// miniprogram/pages/distribution/population/population.js
import * as echarts from '../../../ec-canvas/echarts';
import geoJson from 'china.js';

const app = getApp();

function initChart_pie(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: ' {a} \n {b} : {c}人 ({d}%)'
    },
    series: [
      {
        name: '彝族人口',
        type: 'pie',
        radius: '80%',
        center: ['50%', '60%'],
        minAngle: 10,
        data: [
          { value: 7676419, name: '西南地区' },
          { value: 32732, name: '华东地区' },
          { value: 30605, name: '中南地区' },
          { value: 10982, name: '华北地区' },
          { value: 6954, name: '东北地区' },
          { value: 4580, name: '西北地区' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

function initChart_map(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  echarts.registerMap('china', geoJson);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: ' {a} \n {b} : {c}人'
    },

    visualMap: {
      textstyle: {
        lineHeight: 100
      },
      min: 130,
      max: 475000,
      left: 'left',
      top: '580rpx',
      text: ['多', '少'], // 文本，默认为数值文本
      calculable: false,
      orient: 'horizontal',
      //hoverLink:true
    },
    series: [{
      type: 'map',
      name: '彝族人口',
      roam: true,
      zoom: 1.2,
      mapType: 'china',
      label: {
        normal: {
          show: true,
          fontSize: 5
        },
        emphasis: {
          textStyle: {
            color: '#fff',

          }
        }
      },
      itemStyle: {

        normal: {
          borderColor: '#389BB7',
          areaColor: '#fff',
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      },
      animation: false,

      data: [
        { name: '云南', value: 4705658 },
        { name: '四川', value: 2122389 },
        { name: '贵州', value: 843554 },
        { name: '广西', value: 9712 },
        { name: '广东', value: 8700 },
        { name: '江苏', value: 8244 },
        { name: '浙江', value: 6344 },
        { name: '山东', value: 6208 },
        { name: '安徽', value: 5607 },
        { name: '河南', value: 5364 },
        { name: '重庆', value: 4531 },
        { name: '湖南', value: 4116 },
        { name: '河北', value: 3721 },
        { name: '辽宁', value: 2641 },
        { name: '福建', value: 2615 },
        { name: '山西', value: 2473 },
        { name: '江西', value: 2271 },
        { name: '吉林', value: 2253 },
        { name: '湖北', value: 2117 },
        { name: '内蒙古', value: 2089 },
        { name: '黑龙江', value: 2060 },
        { name: '北京', value: 1919 },
        { name: '甘肃', value: 1722 },
        { name: '新疆', value: 1593 },
        { name: '上海', value: 1443 },
        { name: '陕西', value: 854 },
        { name: '天津', value: 780 },
        { name: '海南', value: 596 },
        { name: '西藏', value: 287 },
        { name: '青海', value: 274 },
        { name: '宁夏', value: 137 },
        { name: '台湾', value: 0 },
        { name: '南海诸岛', value: 0 },
        { name: '香港', value: 0 },
        { name: '澳门', value: 0 }
      ]

    }],

  };

  chart.setOption(option);

  return chart;
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec_map: {
      onInit: initChart_map
    },
    ec_pie: {
      onInit: initChart_pie
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})