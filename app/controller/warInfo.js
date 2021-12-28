'use strict';
const Controller = require('egg').Controller;

class WarController extends Controller {
  async getWarInfoTime() {
    const { ctx } = this;
    const result = await this.service.warInfo.getWarInfo();
    ctx.body = result;
  }
}

module.exports = WarController;
