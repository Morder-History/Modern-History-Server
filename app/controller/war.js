'use strict';
const Controller = require('egg').Controller;
const { errorResult, successResult } = require('../utils/request');
class WarController extends Controller {
  // 获取战争信息时间线
  async getWarInfo() {
    const { ctx } = this;
    const result = await this.service.war.getWarInfo();
    ctx.body = result;
  }
  // 获取战争(地图)信息时间线
  async getWarInfoTimeLine() {
    const { ctx } = this;
    // 获取传过来的参数
    const year = Number(ctx.query.year);
    if ([ undefined, null, '', NaN ].includes(year) || typeof year !== 'number') {
      ctx.body = errorResult('参数错误');
    } else {
      const result = await this.service.war.getWarInfoTimeLine(year);
      ctx.body = successResult(result);
    }
  }
}

module.exports = WarController;
