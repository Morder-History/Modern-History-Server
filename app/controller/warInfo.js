'use strict';
const Controller = require('egg').Controller;

class WarController extends Controller {
  async getWarInfoTime() {
    const { ctx } = this;
    const result = await this.service.warInfo.sTest();
    // 处理返回的数据
    const data = [];
    result.forEach(item => {
      data.push({
        id: item.id,
        war_name: item.war_name,
        start_time: item.s_time,
        end_time: item.end_time,
      });
    });
    ctx.body = data;
  }
}

module.exports = WarController;
