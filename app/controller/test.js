'use strict';
// 处理前台传入的数据
const Controller = require('egg').Controller;

class TestController extends Controller {
  /**
   *
   * @api {method} /path title
   * @apiName apiName
   * @apiGroup group
   * @apiVersion  1.0.0
   *
   * @apiParam  {String} paramName description
   *
   * @apiSuccess (200) {type} name description
   *
   * @apiParamExample  {type} Request-Example:
   * {
   *     property : value
   * }
   *
   *
   * @apiSuccessExample {type} Success-Response:
   * {
   *     property : value
   * }
   *
   *
   */
  async test() {
    const { ctx } = this;
    const a = await ctx.service.test.sTest();
    ctx.body = `${JSON.stringify(a)}`;
  }
}

module.exports = TestController;
