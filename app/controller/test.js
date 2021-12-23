'use strict';
// 处理前台传入的数据
const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    const { ctx } = this;
    const a = await ctx.service.test.sTest();
    ctx.body = `${JSON.stringify(a)}`;
  }
}

module.exports = TestController;
