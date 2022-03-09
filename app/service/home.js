'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
  async getHomeData() {
    // 单实例可以直接通过 app.mysql 访问
    const result = await this.app.mysql.query(`
    SELECT
    id,
    title,
    description,
    image,
    JSON_EXTRACT(moreInfo_otherName,"$[*]") as moreInfo_otherName,
    moreInfo_happenTiem as happenTiem,
    moreInfo_place,
    moreInfo_mainPerson_china,
    moreInfo_mainPerson_japan,
    moreInfo_result as result
    from home;
    `);
    // 返回的数据结构
    const data = [];
    for (let i = 0; i < result.length; i++) {
      data.push({
        id: result[i].id,
        title: result[i].title,
        description: result[i].description,
        image: result[i].image,
        moreInfo: {
          otherName: JSON.parse(result[i].moreInfo_otherName),
          happenTiem: result[i].moreInfo_happenTime,
          place: result[i].moreInfo_place,
          mainPerson: {
            china: result[i].moreInfo_mainPerson_china,
            japan: result[i].moreInfo_mainPerson_japan,
          },
          consequence: result[i].consequence,
          result: result[i].result,
        },
      });
    }
    return data;
  }
  async getHomeTimeLine() {
    const result = await this.app.mysql.query('SELECT id,title,date from hometimeline ORDER BY date ASC;');
    return result;
  }
}

module.exports = HomeService;
