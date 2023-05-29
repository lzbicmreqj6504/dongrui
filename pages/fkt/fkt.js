// pages/test/test.js\
import * as echarts from '../../ec-canvas/echarts.js'
import geoJson from '../../lib/mapData.js'
import provinceMap from '../../utils/province.js'
const app = getApp()
/**
 * 生成1000以内的随机数
 */
function randomData() {
  return Math.round(Math.random() * 1000);
}

let provinceData = []
let drawProvinceName = ''
let cityList = []
let selectCity = {}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    isLoaded: false,
    isDisposed: false,
    showToolTip: true,
    toolTip: {
      x: -200,
      y: -200,
      name: '',
      value: ''
    },
    showBack: false,
    showMap: !1,
    // 地图数据
    centerPoint: {
      longitude:0,
      latitude: 0,
    },
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    isZkt:true,
    box_list:[
        {
            name:'DCDC',
            bjlx:'通用故障',
            gzsj:'2023-05-24 14:06',
            jcsj:'2023-05-24 14:06',
            cxsj:'50分钟',
            type:'bcblue'
        },{
            name:'DCDC',
            bjlx:'通用故障',
            gzsj:'2023-05-24 14:06',
            jcsj:'2023-05-24 14:06',
            cxsj:'50分钟',
            type:'bcred'
        },{
            name:'DCDC',
            bjlx:'通用故障',
            gzsj:'2023-05-24 14:06',
            jcsj:'2023-05-24 14:06',
            cxsj:'50分钟',
            type:'bcblue'
        },{
            name:'DCDC',
            bjlx:'通用故障',
            gzsj:'2023-05-24 14:06',
            jcsj:'2023-05-24 14:06',
            cxsj:'50分钟',
            type:'bcred'
        },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
    
  },
  goXq(){
      wx.navigateTo({
        url: '../data_list/data_list',
      })
  },
 
  xzrq(){
      console.log('xzrq')
      wx.navigateTo({
        url: '../data_seldate/data_seldate',
      })
  },
  gojqlb(){
    console.log('gojqlb')
      wx.navigateTo({
        url: '../data_jqlist/data_jqlist',
      })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})