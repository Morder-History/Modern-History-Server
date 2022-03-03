'use strict';
// 处理前台传入的数据
const Controller = require('egg').Controller;

class TestController extends Controller {
  async getVideo918() {
    const { ctx } = this;
    const result = await ctx.service.video.getVideo918();
    ctx.body = {
      code: 200,
      data: result,
    };
  }
}

module.exports = TestController;
