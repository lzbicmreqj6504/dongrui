import { averageUser,dealers } from '../../utils/util'
const app = getApp()
Page({
    data: {
        Message:null,
        background: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500
    },
    onLoad () {
      this.getImg()
    },
    
    
    zkt (e) {
        app.globalData.list =  [
            {
                pagePath: "/pages/map/map",
                iconPath: "/image/sy1.png",
                selectedIconPath: "/image/sy2.png",
                text: "首页"
              },
              {
                pagePath: "/pages/Select_data/select_data",
                iconPath: "/image/rw1.png",
                selectedIconPath: "/image/rw2.png",
                text: "设备详情"
              },
              {
                pagePath: "/pages/shwx/shwx",
                iconPath: "/image/rw1.png",
                selectedIconPath: "/image/rw2.png",
                text: "售后维修"
              },
        ]
        wx.setStorage({
            key:"fkt",
            data:"zkt"
        })
        console.log(app)
        wx.switchTab({
          url: '../map/map',
        })
    },
    fkt (e) {
        app.globalData.list =  [
            {
                pagePath: "/pages/fkt/fkt",
                iconPath: "/image/sy1.png",
                selectedIconPath: "/image/sy2.png",
                text: "首页"
              },
              {
                pagePath: "/pages/Select_data/select_data",
                iconPath: "/image/rw1.png",
                selectedIconPath: "/image/rw2.png",
                text: "设备详情"
              },
              {
                pagePath: "/pages/fktRw/fktRw",
                iconPath: "/image/rw1.png",
                selectedIconPath: "/image/rw2.png",
                text: "任务"
              }
        ]
        wx.setStorage({
            key:"fkt",
            data:"fkt"
        })
        wx.switchTab({
          url: '../fkt/fkt',
        })
    },
    getImg(){
        let that = this
        wx.request({
            url:'https://owl.zjzenbo.com/api/banner', //必填，其他的都可以不填
            
            header:{  
               'content-type':'application/json'
            },
            method:'GET',  
            dataType:'JSON',  
            responseType:'text', 
            success(res){
                console.log(res);
                let data  = JSON.parse(res.data)
                that.setData({
                    background:data
                })
            },
            fail(){  
                console.log('fail')
            },
            complete(){   
                 console.log('complete')   
            }
        }  )  
    },
  })