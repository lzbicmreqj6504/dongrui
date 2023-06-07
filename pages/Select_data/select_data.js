// pages/Select_data/select_data.js
import * as echarts from '../../ec-canvas/echarts';
var barChart = null;
// function initChart(canvas, width, height, dpr) {
//     const chart = echarts.init(canvas, null, {
//       width: width,
//       height: height,
//       devicePixelRatio: dpr // 像素
//     });
//     canvas.setChart(chart);
  
//     var option = {
//         xAxis: {
//             type: 'category',
//             data: ['型号1', '型号2', '型号3', '型号4', '型号5', '型号6', '型号7']
//           },
//           yAxis: {
//             type: 'value'
//           },
//           series: [
//             {
//               data: [120, 200, 150, 80, 70, 110, 130],
//               type: 'bar'
//             }
//           ]
      
//     };
//     chart.setOption(option);
//     return chart;
// }
  
  
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ec: {
            onInit: function (canvas, width, height) {
                 barChart = echarts.init(canvas, null, {
                   width: width,
                   height: height
                 });
                 canvas.setChart(barChart);
                 return barChart;
               }
         },
      
        kssj:'',
        jssj:'',
        zjst:false,
        items: [
            { name: 'zjst', value: '最近三天' },
            { name: 'zjyz', value: '最近一周', checked: 'true' },
            { name: 'zjyy', value: '最近一月' },
            { name: 'zjjd', value: '最近季度' },
           
        ],
        region:['全部省份'],
        activityArr: [
            { id: 1, label: '型号1' },
            { id: 2, label: '型号2' },
            { id: 3, label: '型号3' },
            { id: 4, label: '型号4' }
          ],
        setIndex:'所有型号',
        submitLoading:false,
        fkt:'',
        islist:'gdlb',
        isbtn:true,
        selectBtn:[
            {
                id:0,
                state:'生产',
                bg:'bg-gray',
            },
            {
                id:1,
                state:'故障',
                bg:'bg-gray',
            },
            {
                id:2,
                state:'维修',
                bg:'bg-gray',
            },
            {
                id:3,
                state:'换模',
                bg:'bg-gray',
            }
        ],
        box_list:[
            {
                name:'DCDC',
                bjlx:'通用故障',
                gzsj:'2023-05-24 14:06',
                jcsj:'BBAASS',
                cxsj:'50分钟',
                type:'bcred',
                state:'0'
                
            },{
                name:'DCDC',
                bjlx:'通用故障',
                gzsj:'2023-05-24 14:06',
                jcsj:'BBAASS',
                cxsj:'50分钟',
                type:'bcyellow',
                state:'1',
            },{
                name:'DCDC',
                bjlx:'通用故障',
                gzsj:'2023-05-24 14:06',
                jcsj:'BBAASS',
                cxsj:'50分钟',
                type:'bcblue',
                state:'2',
            },{
                name:'DCDC',
                bjlx:'通用故障',
                gzsj:'2023-05-24 14:06',
                jcsj:'BBAASS',
                cxsj:'50分钟',
                type:'bcgray',
                state:'3',
            },
        ],
        activityArr: [
            { id: 1, label: '型号1' },
            { id: 2, label: '型号2' },
            { id: 3, label: '型号3' },
            { id: 4, label: '型号4' }
          ],
    },
    jqxq(){
        wx.navigateTo({
          url: '../data_jqstate/data_jqstate',
        })
    },
    selectB(e){
        console.log(e.target.dataset.index)
        let index = e.target.dataset.index
        let arr = this.data.selectBtn
        for(let i=0;i<arr.length;i++){
            if(arr[i].id==index){
                if(arr[i].bg=='bg-gray'){
                    arr[i].bg = 'bg-blue'
                }else{
                    arr[i].bg = 'bg-gray'
                }
                
            }
        }
        this.setData({
            selectBtn:arr
        })
    },
    getData() {
        wx.showLoading({
          title: '加载中...',
        });
        let that = this;
        wx.request({
          url: 'https://owl.zjzenbo.com/api/banner',
          method: 'get',
          data: {
            year: that.data.year
          },
          dataType: 'jsonp',
          success: function (res) {
            wx.hideLoading();
            console.log(res);
            var data = JSON.parse(res.data);
            var datas = [];
              datas = [120, 200, 150, 80, 70, 110, 130];
              
            var monthstr = ['型号1', '型号2', '型号3', '型号4', '型号5', '型号6', '型号7'];
            console.log(datas);
            barChart.setOption({
              title: {
                text: "",
                left: 'center'
              },
              xAxis: {
                type: 'category',
                data: monthstr,
                axisLabel: {
                  interval: 0
                }
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: datas,
                type: 'bar',
                itemStyle: {
                  normal: {
                    color:'#3894FF',
                    label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: '#3894FF'
                      },
                      formatter: '{c}'
                    }
                  }
                }
              }],
            });
            
          },
          fail: function (res) {
            console.log("执行失败：" + res);
          }
        })
     
      },
    bindPickerChange (e) {
        console.log("e",e);
        this.setData({
          setIndex: parseInt(e.detail.value)
        })
    },
    getUserProvince:function(e)
    {
       this.setData({
           region:e.detail.value     //将用户选择的省市区赋值给region
       })
    },
    radioChange: function (e) {
        var str = null;
        //获取当前选中的值 
        let selectValue =e.detail.value;
        //循环遍历
        for (var value of this.data.items) {
          if (value.name === selectValue) {
            str = value.value;
            break;
          }
        }
    },
    kssjChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            kssj: e.detail.value
        })
    },
    jssjChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            jssj: e.detail.value
        })
    },
    submitSelect:function(){
        
        // this.setData({
        //     submitLoading:true
        // })
        this.getData()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getData()
        let fkt = wx.getStorageSync('fkt')
        this.setData({
            fkt:fkt
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})