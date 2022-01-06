'use strict';
const Service = require('egg').Service;
class WarInfoService extends Service {
  // 获取战争信息
  async getWarInfo() {
    const result = await this.app.mysql.query(`
    SELECT id,war_name,start_time as s_time,end_time from warinfo ORDER BY s_time ASC;
    `);
    // 处理返回的数据
    const data = [];
    result.forEach(item => {
      data.push({
        id: item.id,
        war_name: item.war_name,
        start_time: item.s_time,
        end_time: item.end_time,
      });
    });
    return data;
  }
  // 获取战争(地图)信息时间线
  async getWarInfoTimeLine(year) {
    // 处理默认值
    year = year === 0 ? year = 1937 : year;
    const result = await this.app.mysql.query(`
    SELECT
    id,
    warName,
    startTime,
    warfareCenter,
    personageInfo,
    warIntroduce
    FROM war_timeline
    WHERE YEAR(startTime) = ${year}
    ORDER BY startTime ASC
    `);
    // 处理返回的数据
    const data = [];
    result.forEach(item => {
      data.push({
        id: item.id,
        warName: item.warName,
        startTime: item.startTime,
        warfareCenter: JSON.parse(item.warfareCenter),
        personageInfo: JSON.parse(item.personageInfo),
        warIntroduce: item.warIntroduce,
      });
    });
    return data;
  }
}

module.exports = WarInfoService;
