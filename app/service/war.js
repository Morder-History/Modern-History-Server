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
    year = year === 0 ? (year = 1937) : year;
    await this.app.mysql.query('SET SESSION group_concat_max_len = 10240;');
    await this.app.mysql.query('SET GLOBAL group_concat_max_len = 10240;');
    const result = await this.app.mysql.query(`
    SELECT DISTINCT wt.id,wt.warName,wt.startTime,wt.warfareCenter,
    CONCAT('[',
      GROUP_CONCAT(
      CONCAT('{"name":"', wp.name, '",'),
      CONCAT('"birth":"', wp.birth, '",'),
      CONCAT('"jianjie":"', wp.jianjie, '",'),
      CONCAT('"picture":"', wp.picture, '",'),
      CONCAT('"shengping":"', IFNULL(wp.shengping,''), '"}')),
      ']') AS personageInfo,
      wt.warIntroduce
    FROM war_and_person as wap
    INNER JOIN war_timeline as wt ON wt.warID = wap.warID AND YEAR(wt.startTime) = ${year}
    INNER JOIN war_person as wp ON wp.personID = wap.personID
    GROUP BY wt.id
    ORDER BY wt.startTime ASC;
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
