Page({
    data: {
      Message:null
    },
    onLoad () {
      
    },
    
    
    jrzt (e) {
        wx.navigateTo({
          url: '../map/map?type='+e.currentTarget.dataset.index,
        })
    }
  })