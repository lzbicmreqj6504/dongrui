const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
// 普通用户
export const averageUser = [
    {
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/home.png",
      "selectedIconPath": "/images/home-color.png"
    },
    {
      "pagePath": "/pages/user/user",
      "text": "个人中心",
      "iconPath": "/images/user.png",
      "selectedIconPath": "/images/user-color.png"
    }
  ]
  
  // 经销商
  export const dealers = [
    {
      "pagePath": "/pages/shopping/shopping",
      "text": "商城",
      "iconPath": "/images/shopping.png",
      "selectedIconPath": "/images/shopping-color.png"
    },
    {
      "pagePath": "/pages/members/members",
      "text": "会员中心",
      "iconPath": "/images/member.png",
      "selectedIconPath": "/images/member-color.png"
    }
  
  ]
  
