// pages/shwx/shwx.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        islist:'gdlb',
        isbtn:true,
        selectBtn:[
            {
                id:0,
                state:'未处理',
                bg:'bg-gray',
            },
            {
                id:1,
                state:'调度中',
                bg:'bg-gray',
            },
            {
                id:2,
                state:'维修中',
                bg:'bg-gray',
            },
            {
                id:3,
                state:'已完结',
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
    gdlb(){
        this.setData({
            islist:'gdlb'
        })
    },
    jqxq(){
        wx.navigateTo({
          url: '../data_jqstate/data_jqstate',
        })
    },
    rylb(){
        this.setData({
            islist:'rylb'
        })
    },
    ryxq(){
        wx.navigateTo({
          url: '../ryxq/ryxq',
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
    init(){
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