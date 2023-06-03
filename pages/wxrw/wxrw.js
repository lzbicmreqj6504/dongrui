// pages/djrw/djrw.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        kssj:'',
        jssj:'',
        activityArr: [
            { id: 1, label: '型号1' },
            { id: 2, label: '型号2' },
            { id: 3, label: '型号3' },
            { id: 4, label: '型号4' }
          ],
        setIndex:'1',
        switch1Checked: true,
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
    kswx(){
        wx.navigateTo({
          url: '../fqwx/fqwx',
        })
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