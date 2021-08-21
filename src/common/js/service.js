// Created by macmzon@163.com
// 公共方法库

// let Base64 = require('js-base64').Base64
// this.$post('url', {}, res => { console.log(res) }, err => { console.log(err) })

// 获取数据
export function _getData (url, success, fail) {
  try {
    let data = require('@/common/data/english/' + url)
    data = data.course
    success && success(data)
  } catch (error) {
    console.log(error)
    fail && fail(error)
  }
}
