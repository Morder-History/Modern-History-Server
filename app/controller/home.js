'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好,世界';
  }
  async home() {
    const { ctx, service } = this;
    const data = await service.home.getHomeData();
    ctx.body = {
      code: 200,
      data,
    };
  }
}

module.exports = HomeController;
