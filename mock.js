
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
  '细分名称': `@pick(['圆管', '旗杆管', '围栏管', '制品管', '不锈钢管'])`
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


function mockColumns(apikey, columnsData) {
  checkDirExists().then(res => {
    const template = fs.readFileSync('template.ejs', 'utf-8');
    const rendered = ejs.render(template, {});
    fs.writeFileSync(path.join(dirName, apikey + '.ts'), rendered, (err) => {
      if (err) {
        console.error('写入文件失败:', err);
        return;
      }
    });
  })
}


mockColumns()