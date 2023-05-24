Page({
    data: {
      Message:null
    },
    onLoad () {
      
    },
    
    
    zkt (e) {
        wx.navigateTo({
          url: '../map/map?type='+e.currentTarget.dataset.index,
        })
    },
    fkt (e) {
        wx.navigateTo({
          url: '../map/map?type='+e.currentTarget.dataset.index,
        })
    }
  })