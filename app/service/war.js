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
  async getWarInfoTimeLine(year = 1937) {
    const result = await this.app.mysql.query(`
    SELECT
    winfo.id,
    winfo.war_name,
    winfo.start_time,
    wtime.warfareCenter
    from warinfo as winfo,war_timeline as wtime
    WHERE winfo.start_time = wtime.start_time
    AND YEAR(winfo.start_time) = ${year}
    ORDER BY winfo.start_time;
    `);
    // 处理返回的数据
    const data = [];
    result.forEach(item => {
      data.push({
        id: item.id,
        warName: item.war_name,
        startTime: item.start_time,
        warfareCenter: JSON.parse(item.warfareCenter),
      });
    });
    return data;
  }
}

module.exports = WarInfoService;
