'use strict';
const Service = require('egg').Service;
class WarInfoService extends Service {
  async getWarInfo() {
    const result = await this.app.mysql.query(`
    SELECT id,war_name,start_time as s_time,end_time,location,war_details,war_details_markdown from warinfo ORDER BY s_time ASC;
    `);
    // 处理返回的数据
    const data = [];
    result.forEach(item => {
      data.push({
        id: item.id,
        war_name: item.war_name,
        start_time: item.s_time,
        end_time: item.end_time,
        location: item.location,
        war_details: item.war_details,
        war_details_markdown: item.war_details_markdown,
      });
    });
    return data;
  }
}

module.exports = WarInfoService;
