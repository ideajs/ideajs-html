// Created by macmzon@163.com
// 测试环境配置
export const _CONFIG = {
  /* 配置参数 */
  project: 'ideajs-html', // 项目名称
  version: 'v1_101', // 项目版本号
  date: '2018-11-23', // 项目版本日期
  appid: 'FI03-0861',
  apptoken: '$2a$21$zW6nZAMh6dZd9xh13xVea6CcqehvW.Xv/GFKWo9kHT0QiRv./Qhye',
  /* 链接 */
  XML: '', // 登录地址
  MSG: 'https://', // 消息
  IMAGE: 'https://' // 图片地址
}
export function DEV_CONFIG(key) {
  return _CONFIG[key] || ''
}
