// Created by macmzon@163.com
// 公共方法库

import {_getData} from '../service.js'
// let Base64 = require('js-base64').Base64
// this.$post('url', {}, res => { console.log(res) }, err => { console.log(err) })

// 获取消息
export function _getNews (param, func) {
  let news = []
  if (param === 'history') { // 历史消息
    let data = require('@/common/data/news/historyNews.js')
    news = data.historyNews.news
  } else { // 最新消息
    let data = require('@/common/data/news/newNews.js')
    news = data.newNews.news
  }
  func && func(news)
}
// 获取菜单按钮
export function _getMenu (func) {
  _getData('course.js', func)
}
// 获取首页课程
export function _getCourse (func) {
  _getData('course.js', func)
}
