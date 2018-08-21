
//获取菜单数据
export function GetMenu(params) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 0,
      data: {
        list: [
          { name: '张三1' },
          { name: '张三2' },
          { name: '张三3' },
          { name: '张三4' },
          { name: '张三5' },
        ]
      }
    })
  })
}