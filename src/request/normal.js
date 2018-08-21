
//获取搜索框数据
export function GetData(params) {
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

//获取搜索框下拉数据
export function GetSelect() {
  return new Promise((resolve, reject) => {
    resolve({
      code: 0,
      data: {
        list: [
          { value: 1, label: '坐席1' },
          { value: 2, label: '坐席2' },
          { value: 3, label: '坐席3' },
        ]
      }
    })
  })
}