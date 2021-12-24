/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 跨域配置
  config.cors = {
    origin: '*', // 表示允许的源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 表示允许的http请求方式
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1640174987973_4111';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 端口配置
  config.cluster = {
    listen: {
      port: 3010,
      // hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };
  // mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: process.env.DATABASE_HOST || '127.0.0.1',
      // 端口号
      port: process.env.DATABASE_PORT || '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: process.env.DATABASE_DB || 'morder-history',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.security = {
    // CSRF
    csrf: {
      enable: false,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
