'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * @api {post} /admin_login/  用户登录
   * @apiGroup  admin
   * @apiParam {Number}   account     账号（手机号）.
   * @apiParam {String}   pw  密码.
   * @apiSuccess {String} msg 详细信息.
   * @apiSuccess {Number} status 状态码（1：登录成功，2：密码或账号错误，3：参数验证失败）
   * @apiSuccess {Number} is_admin （身份标识：-1普通注册，0球员，1及以上，代表创建的球队个数）.
   * @apiSuccessExample {json} 成功时返回:
   * {
   * "msg": "登录成功",
   * "status": 1,
   * "data": {
   * "user_id": 4,
   * "is_admin": 2
   * }
   * }
   * @apiError {Number} status 状态码（1：登录成功，2：密码或账号错误，3：参数验证失败）
   * @apiErrorExample {json} 错误时返回:
   * {
   *  code:500,
   *  msg:"错误"
   * }
   *
   */
  async index() {
    const { ctx } = this;
    ctx.body = '你好,世界';
  }
}

module.exports = HomeController;
