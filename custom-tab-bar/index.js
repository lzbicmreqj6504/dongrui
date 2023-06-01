Component({
    data: {
      selected: 0,
      color: "#707070",
      selectedColor: "#2c2c2c",
      list: [ {
        pagePath: "/pages/fkt/fkt",
        iconPath: "/image/sy1.png",
        selectedIconPath: "/image/sy2.png",
        text: "首页"
      },
      {
        pagePath: "/pages/fktRw/fktRw",
        iconPath: "/image/rw1.png",
        selectedIconPath: "/image/rw2.png",
        text: "任务"
      }]
    },
    attached() {
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