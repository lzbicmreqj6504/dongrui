// pages/fqdjrw/fqdjrw.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList: [],
        modalName: null,
    },
    ViewImage(e) {
        wx.previewImage({
          urls: this.data.imgList,
          current: e.currentTarget.dataset.url
        });
      },
      DelImg(e) {
        wx.showModal({
          title: '召唤师',
          content: '确定要删除这段回忆吗？',
          cancelText: '再看看',
          confirmText: '再见',
          success: res => {
            if (res.confirm) {
              this.data.imgList.splice(e.currentTarget.dataset.index, 1);
              this.setData({
                imgList: this.data.imgList
              })
            }
          }
        })
      },
      ChooseImage() {
        wx.chooseImage({
          count: 4, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], //从相册选择
          success: (res) => {
            if (this.data.imgList.length != 0) {
              this.setData({
                imgList: this.data.imgList.concat(res.tempFilePaths)
              })
            } else {
              this.setData({
                imgList: res.tempFilePaths
              })
            }
          }
        });
      },
      ViewImage(e) {
        wx.previewImage({
          urls: this.data.imgList,
          current: e.currentTarget.dataset.url
        });
      },
    ListTouchStart(e) {
        this.setData({
          ListTouchStart: e.touches[0].pageX
        })
      },
    
      // ListTouch计算方向
      ListTouchMove(e) {
        this.setData({
          ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
        })
      },
    
      // ListTouch计算滚动
      ListTouchEnd(e) {
        if (this.data.ListTouchDirection =='left'){
          this.setData({
            modalName: e.currentTarget.dataset.target
          })
        } else {
          this.setData({
            modalName: null
          })
        }
        this.setData({
          ListTouchDirection: null
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