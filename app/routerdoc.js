/**
 *
 * @api {/api/v1/home} /api/v1/home 主页
 * @apiName 主页
 * @apiGroup Home
 * @apiVersion  1.0.0
 *
 * @apiSampleRequest http://47.108.197.220:3010/api/v1/home
 * @apiSuccessExample {type} Success-Response:
 *{
 *    "code": 200,
 *    "data": [
 *        {
 *            "id": 1,
 *            "title": "九一八事变",
 *            "description": "九·一八事变，又称奉天事变、柳条湖事件。是1931年9月18日日本驻中国东北地区的关东军突然袭击沈阳，以武力侵占东北的事件。九·一八事变是由日本蓄意制造并发动的侵华战争，是日本帝国主义企图以武力征服中国的开端，是中国抗日战争的起点，标志着中国局部抗战的开始，揭开了第二次世界大战东方战场的序幕。九一八事变后，中国人民的局部抗战也标志着世界反法西斯战争的起点。",
 *            "image": "https://gitee.com/qianshilei/test/raw/master/img/01.9-18.jpg",
 *            "moreInfo": {
 *                "otherName": [
 *                    "奉天事变",
 *                    "柳条湖事件"
 *                ],
 *                "place": "中国东北地区",
 *                "mainPerson": {
 *                    "china": "张学良",
 *                    "japan": "本庄繁，南次郎"
 *                }
 *            }
 *        },
 *        {
 *            "id": 2,
 *            "title": "长征",
 *            "description": "土地革命战争时期，中国工农红军主力撤离长江南北各苏区，转战两年，到达陕甘苏区的战略转移行动。1934年10月，第五次反“围剿”失败后，中央主力红军为摆脱国民党军队的包围追击，被迫实行战略性转移，退出中央根据地，进行长征。",
 *            "image": "https://gitee.com/qianshilei/test/raw/master/img/02.changzheng.jpg",
 *            "moreInfo": {
 *                "otherName": [
 *                    "长征"
 *                ],
 *                "place": "闽赣粤湘桂黔川滇 西康 甘陕等",
 *                "mainPerson": {
 *                    "china": "毛泽东、周恩来、朱德、张闻天等",
 *                    "japan": ""
 *                }
 *            }
 *        },
 *        {
 *            "id": 3,
 *            "title": "淞沪会战",
 *            "description": "淞沪会战（又称八一三战役、第二次淞沪抗战，日本称为第二次上海事变），是中日双方在抗日战争中的第一场大型会战，也是整个中日战争中进行的规模最大、战斗最惨烈的一场战役。 ",
 *            "image": "https://gitee.com/qianshilei/test/raw/master/img/03.songhuhuizhan.jpg",
 *            "moreInfo": {
 *                "otherName": [
 *                    "八一三战役",
 *                    "第二次淞沪抗战"
 *                ],
 *                "place": "上海",
 *                "mainPerson": {
 *                    "china": "冯玉祥（后由蒋介石兼任）",
 *                    "japan": "松井石根"
 *                }
 *            }
 *        },
 *        {
 *            "id": 4,
 *            "title": "徐州会战",
 *            "description": "徐州会战是抗日战争时期中日双方在以江苏省徐州为中心的津浦（天津至浦口）、陇海（宝鸡至连云港）铁路地区进行的一次大规模防御战役，其中以1938年三四月间的台儿庄大战最为著名，因围歼日军一万余人，史称之为台儿庄大捷。徐州会战对日军给予了巨大的打击，大大迟滞了日军进攻的脚步，为中方部署武汉会战赢得了时间。",
 *            "image": "https://gitee.com/qianshilei/test/raw/master/img/04.xuzhouhuizhan.jpg",
 *            "moreInfo": {
 *                "otherName": [
 *                    "徐州会战"
 *                ],
 *                "place": "江苏省徐州为中心的津浦、陇海地区",
 *                "mainPerson": {
 *                    "china": "李宗仁",
 *                    "japan": "寺内寿一"
 *                }
 *            }
 *        },
 *        {
 *            "id": 5,
 *            "title": "第一次长沙会战",
 *            "description": "第一次长沙会战（又称为“第一次长沙战役”、“湘北会战”，日本称“湘赣会战”），是指中华民国二十八年（1939年）9月至10月抗日战争期间，中国第九战区部队在以湖南、湖北、江西三省接壤地区对日本军队进行的防御战役。",
 *            "image": "https://gitee.com/qianshilei/test/raw/master/img/05.changshahuizhan.jpg",
 *            "moreInfo": {
 *                "otherName": [
 *                    "第一次长沙战役",
 *                    "湘北会战"
 *                ],
 *                "place": "湖南、湖北、江西三省接壤地区",
 *                "mainPerson": {
 *                    "china": "薛岳、罗卓英",
 *                    "japan": "冈村宁次"
 *                }
 *            }
 *        },
 *        {
 *            "id": 6,
 *            "title": "湘西会战",
 *            "description": "湘西会战，也称“雪峰山会战”，是中国抗日战争时期正面战场的最后一次会战。侵华日军此战目的是争夺芷江空军基地，故又名“芷江作战”",
 *            "image": "https://gitee.com/qianshilei/test/raw/master/img/06.xiangxihuizhan.webp",
 *            "moreInfo": {
 *                "otherName": [
 *                    "雪峰山会战",
 *                    "芷江保卫战"
 *                ],
 *                "place": "湖南省西部地区",
 *                "mainPerson": {
 *                    "china": "何应钦、王耀武",
 *                    "japan": "坂西一良"
 *                }
 *            }
 *        }
 *    ]
 *}
 *
 *
 *
 *
 */
