'use strict';
const Service = require('egg').Service;
class WarInfoService extends Service {
  async sTest() {
    // 单实例可以直接通过 app.mysql 访问
    return await this.app.mysql.query('SELECT id,war_name,start_time as s_time,end_time from warinfo ORDER BY s_time ASC;');
  }
}

module.exports = WarInfoService;
