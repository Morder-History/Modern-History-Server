'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/v1/home', controller.home.home);
  router.get('/api/v1/homeTimeLine', controller.home.homeTimeLine);
  router.get('/api/v1/warInfo', controller.war.getWarInfo);
  router.get('/api/v1/warTime', controller.war.getWarInfoTimeLine);
  router.get('/api/v1/video918', controller.video.getVideo918);
};
