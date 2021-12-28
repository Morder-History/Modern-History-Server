'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/v1/home', controller.home.home);
  router.get('/api/v1/warInfo', controller.warInfo.getWarInfoTime);
  router.get('/test', controller.test.test);
};
