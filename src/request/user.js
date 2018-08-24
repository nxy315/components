
//获取菜单数据
export function GetMenu(params) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 0,
      data: [
        {
          id: 1,
          name: '概览',
          list: [
            {
              parent: 1,
              name: '首页',
              route: '/home'
            }
          ]
        },
        {
          id: 2,
          name: '功能',
          list: [
            {
              parent: 2,
              name: '充值',
              route: '/home'
            },
            {
              parent: 2,
              name: '发送短信',
              route: '/sendmsg'
            },
          ]
        },
        {
          id: 3,
          name: '财务',
          list: [
            {
              parent: 3,
              name: '账单',
              route: '/finace'
            }
          ]
        },
        {
          id: 4,
          name: '用户中心',
          list: [
            {
              parent: 4,
              name: '用户设置',
              route: '/user'
            },
            {
              parent: 4,
              name: '设置',
              route: '/setting'
            }
          ]
        },
      ]
    })
  })
}