const app = getApp()
Component({
    data: {
      selected: 0,
      color: "#707070",
      selectedColor: "#2c2c2c",
      list: []
    },
    attached() {
        this.setData({
            list: app.globalData.list
          })
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({ url })
        this.setData({
            selected: data.index
        })
      }
    }
  })