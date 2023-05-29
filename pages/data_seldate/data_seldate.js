import todo from '../../components/v2/plugins/todo'
import selectable from '../../components/v2/plugins/selectable'
import solarLunar from '../../components/v2/plugins/solarLunar/index'
import timeRange from '../../components/v2/plugins/time-range'
import week from '../../components/v2/plugins/week'
import holidays from '../../components/v2/plugins/holidays/index'
import plugin from '../../components/v2/plugins/index'

plugin
  .use(todo)
  .use(solarLunar)
  .use(selectable)
  .use(week)
  .use(timeRange)
  .use(holidays)
Page({
    data: {
        calendarConfig:{
            multi: true, // 是否开启多选,
        },
        
      dataTree: [
        {
          id: 11,
          name: '车间A',
          children: [
            {
              id: 13,
              name: '班组1',
              
            },
            {
              id: 14,
              name: '班组2',
            }
          ]
        },
        {
          id: 12,
          name: '车间2',
          children: [
            {
              id: 15,
              name: '班组1',
            }
          ]
        },
        {
          id: 0,
          name: '车间3',
          children: [
            {
              id: 1,
              name: '班组1',
              
            },
            {
              id: 2,
              name: '班组2',
              
            },
            {
              id: 3,
              name: '班组3',
              children: [{
                id: 7,
                name: '班组'
              }]
            }
          ]
        }
      ]
    },
    handleClick(e) {
      console.log('点击事件', e.detail)
    },
    onLoad: function(options) { 
        
    },
    dateSub(){
        const options = {
            lunar: true // 在配置showLunar为false, 但需返回农历信息时使用该选项，使用此配置需引用农历插件
        }
        const calendar = this.selectComponent('#calendar').calendar
        console.log( calendar.getSelectedDates(options))
    },
    afterTapDate(e) {
        console.log('afterTapDate', e.detail)
      },
      whenChangeMonth(e) {
        console.log('whenChangeMonth', e.detail)
      },
      whenChangeWeek(e) {
        console.log('whenChangeWeek', e.detail)
      },
      takeoverTap(e) {
        console.log('takeoverTap', e.detail)
      },
    afterCalendarRender(e) {
        console.log('afterCalendarRender', e)
        const calendar = this.selectComponent('#calendar').calendar
        calendar.jump();
        const toSet = [
            {
              year: 2023,
              month: 5,
              date: 26
            },
            {
              year: 2023,
              month: 5,
              date: 29
            }
          ]
          calendar.setSelectedDates(toSet)
          calendar
          .setCalendarConfig({
            showLunar: false,
            multi: true
          })
          .then(conf => {
            console.log('设置成功：', conf)
          })
    },
    
      
      onConfirm: async function (e) {
        
      },
    
    
    
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {},
    
      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {},
    
      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function () {},
    
      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {},
    
      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {},
    
      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function () {},
  })
  