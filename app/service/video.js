'use strict';
// 行为控制查询数据库使用
const Service = require('egg').Service;
class FrameService extends Service {
  async getVideo918() {
    // 单实例可以直接通过 app.mysql 访问
    return await this.app.mysql.select('video');
  }
}

module.exports = FrameService;
