Page({
    data: {
        Message:null,
        background: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500
    },
    onLoad () {
      this.getImg()
    },
    
    
    zkt (e) {
        wx.navigateTo({
          url: '../map/map',
        })
    },
    fkt (e) {
        wx.navigateTo({
          url: '../fkt/fkt',
        })
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
  })