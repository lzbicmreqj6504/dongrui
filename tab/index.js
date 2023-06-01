Component({
    data: {
      selected: 0,
      color: "#fff",
      selectedColor: "#3cc51f",
      list: [ {
        pagePath: "/pages/fkt/fkt",
        iconPath: "/image/sy.png",
        selectedIconPath: "/image/sy.png",
        text: "首页"
      },
      {
        pagePath: "/pages/fktRw/fktRw",
        iconPath: "/image/rw.png",
        selectedIconPath: "/image/rw.png",
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
      }
    }
  })