// Created by macmzon@163.com
// 公共方法库

import {_getData} from '../service.js'
// let Base64 = require('js-base64').Base64
// this.$post('url', {}, res => { console.log(res) }, err => { console.log(err) })

// 获取首页课程
export function _getCourse (param, success, fail) {
  _getData(param.type + '/' + param.page + '/list.js', success, fail)
}

// 获取某一课程单词表
export function _getWords (param, success, fail) {
  _getData(param.type + '/' + param.page + '/' + param.id2 + '.js', success, fail)
}

// 获取某一课程短语表
export function _getPhrases (param, success, fail) {
  _getData(param.type + '/' + param.page + '/' + param.id2 + '.js', success, fail)
}

// 获取某一课程口语表
export function _getOrals (param, success, fail) {
  _getData(param.type + '/' + param.page + '/' + param.id2 + '.js', success, fail)
}

// 获取某一课程阅读表
export function _getReads (param, success, fail) {
  _getData(param.type + '/' + param.page + '/' + param.id2 + '.js', success, fail)
}

// 获取某一课程写作表
export function _getWrites (param, success, fail) {
  _getData(param.type + '/' + param.page + '/' + param.id2 + '.js', success, fail)
}

// 获取某一课程语法表
export function _getGrammars (param, success, fail) {
  _getData(param.type + '/' + param.page + '/' + param.id2 + '.js', success, fail)
}
