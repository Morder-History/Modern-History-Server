'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
    ${process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3010/public/api/index.html' : 'http://120.27.136.149:3010/public/api/index.html'}
    `;
  }
  // 首页一屏数据
  async home() {
    const { ctx, service } = this;
    const data = await service.home.getHomeData();
    ctx.body = {
      code: 200,
      data,
    };
  }
  // 首页二屏数据
  async homeTimeLine() {
    const { ctx, service } = this;
    const data = await service.home.getHomeTimeLine();
    ctx.body = {
      code: 200,
      data,
    };
  }
}

module.exports = HomeController;
