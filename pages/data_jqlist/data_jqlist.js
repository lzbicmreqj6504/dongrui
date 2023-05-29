// pages/data_jqlist/data_jqlist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            { name: 'yx', value: '运行' },
            { name: 'tj', value: '停机', checked: 'true'},
            { name: 'dk', value: '断开' },
            { name: 'lx', value: '离线' },
            { name: 'bj', value: '报警' },
           
        ],
        items1: [
            { name: 'sc', value: '生产' },
            { name: 'wx', value: '维修', checked: 'true' },
            { name: 'gz', value: '故障' },
            { name: 'hm', value: '换模' },
            { name: 'sm', value: '试模' },
           
        ],
    },
    radioChange1(e){

    },
    
    radioChange2(e){

    },
    jqxq(){
        wx.navigateTo({
          url: '../data_jqstate/data_jqstate',
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
        // this.doSometing()
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