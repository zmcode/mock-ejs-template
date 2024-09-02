
const dirName = 'mock'
const fsPomise = require('fs').promises;
const fs = require('fs')
const ejs = require('ejs');
const path = require('path');


const mockKeyMapByName = {
  '商品编码': `@pick(['00FF00FF0101', '00FF00FF0102', '00FF00FF0103'])`,
  '商品类别': `@pick(['不锈钢/不锈钢管/圆管'])`,
  '规格': `@pick(['6×0.1×6000', '6×0.2×6000', '6×0.3×6000', '6×0.4×6000', '6×0.5×6000', '6×0.6×6000', '6×0.7×6000', '6×0.8×6000', '6×0.9×6000', '6×1.2×6000'])`,
  '单价': '@float(5, 10000, 2)',
  '数量': '@natural(1, 999)',
  '总价': '@float(5, 10000, 2)',
  '备注': `@pick(['备注1', '备注2', '备注3', '备注4', '备注5', '备注6', '备注7', '备注8', '备注9', '备注10'])`,
  '材质': `@pick(['201', '304', '304s', 'sus304', '316', '316L', 'sus201'])`,
  '产地': `@pick(['佛山顺德', '山西鞍钢', '广州广钢', '保山太钢', '舟山钢业', '青山钢铁', '上海国钢', '舟山钛钢', '澳洲钢铁', '南非铁矿'])`,
  '工艺': `@pick(['焊管/卫生管','无缝管/制品管','焊管/卫生级', '无缝管/医疗器械管', ])`,
  '硬度': `@pick(['HRC25', 'HRC26', 'HRC27', 'HRC28', 'HRC29', 'HRC30', 'HRC31', 'HRC32', 'HRC33', 'HRC34','HRC35' ])`,
  '钢印': `@pick(['有印', '无印'])`,
  '等级': `@pick(['一级品', '二级品','三级品','四级品','五级品', ])`,
  '细分名称': `@pick(['圆管', '旗杆管', '围栏管', '制品管', '不锈钢管'])`,
  '规格格式': `@pick(['外经 * 壁厚 * 长度（mm）'])`,
  '密度值': `@pick(['7.85 g/cm³'])`,
  '计量方式': `@pick(['记数', '理记', '抄码'])`,
  '数量单位':  `@pick(['支','个','张','卷','根','条','批','台','套','箱','块'])`,
  '重量单位': `@pick(['千克（kg）', '克（g）', '吨（t）'])`,
  '计价单位': `@pick(['千克（kg）', '克（g）', '吨（t）'])`,
  '税率': `@pick(['13%', '9%', '0%'])`,
  '创建人': `@pick(['系统管理员'])`,
  '更新人': `@pick(['钢材信息专家'])`,
  '更新时间': `@date('yyyy-MM-dd hh:mm:ss')`,
  '商品备注': `@pick(['-'])`,
  '发票税务编码': `@pick(['-'])`,
  '协议日期': `@date('yyyy-MM-dd')`,
  '协议编号': `@pick(['ABFF01', '01FEA2', '0AF303', '82FF04'])`,
  '客户':`@cname()`,
  '业务员': `@cname()`,
  '类别编码': `@pick(['ABFF01', '01FEA2', '0AF303', '82FF04'])`,
  '类别': `@pick(['不锈钢/不锈钢管/圆管', '不锈钢/不锈钢管/方管', '不锈钢/不锈钢管/矩管', '不锈钢/不锈钢管/异形管'])`
}


function checkDirExists() {
  /* 创建文件夹 */
  return new Promise((resolve, reject) => {
    fsPomise.access(dirName).then(res => {
      console.log('文件夹已存在');
      resolve()
    }).catch(async err => {
      await fs.mkdir(dirName);
      resolve()
    });
  })
}

function createMockFile(mockObj) {
  const obj = {}
  checkDirExists().then(_ => {
    for (const key in mockObj) {
      if (Object.prototype.hasOwnProperty.call(mockObj, key)) {
        const element = mockObj[key];
        if (element.apikey) {
          mockColumns(element.apikey)
          const itemObj = {}
          element.columns.forEach(item => {
            const mockKey = mockKeyMapByName[item.title] || '@natural(1, 999)'
            itemObj[item.dataIndex] = mockKey
          })
          obj[element.apikey] = itemObj
        }
      }
    }


    fs.writeFileSync(path.join('mock.ts'), `export const MOCK_DATA = ${ JSON.stringify(obj)}`, (err) => {
      if (err) {
        console.error('写入文件失败:', err);
        return;
      }
    });

  })


}


function mockColumns(apikey) {
  console.log(apikey, 'apikey')
  checkDirExists().then(res => {
    const template = fs.readFileSync('template.ejs', 'utf-8');
    const rendered = ejs.render(template, { apikey });
    fs.writeFileSync(path.join(dirName, apikey + '.ts'), rendered, (err) => {
      if (err) {
        console.error('写入文件失败:', err);
        return;
      }
    });
  })
}




exports.createMockFile = createMockFile