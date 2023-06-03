// pages/fktRw/fktRw.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        elements: [{
            title: '点检任务',
            name: 'Dianjian',
            nav:'djrw',
            color: 'cyan',
            icon: 'edit'
          },
          {
            title: '保养任务',
            name: 'Baoyang',
            color: 'blue',
            icon: 'newshot',
            nav:'byrw',
          },
          {
            title: '维修任务',
            name: 'Weixiu',
            color: 'purple',
            icon: 'settingsfill',
            nav:'wxrw',
          },
          {
            title: '生产任务 ',
            name: 'Shengchan',
            color: 'mauve',
            icon: 'expressman',
            nav:'scrw',
          },
          
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getImg()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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