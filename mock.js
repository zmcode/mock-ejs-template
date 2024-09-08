
const fsPomise = require('fs').promises;
const fs = require('fs')
const ejs = require('ejs');
const path = require('path');
const { log } = require('console');


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
  '数量单位': `@pick(['支','个','张','卷','根','条','批','台','套','箱','块'])`,
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
  '客户': `@cname()`,
  '业务员': `@cname()`,
  '类别编码': `@pick(['ABFF01', '01FEA2', '0AF303', '82FF04'])`,
  '类别': `@pick(['不锈钢/不锈钢管/圆管', '不锈钢/不锈钢管/方管', '不锈钢/不锈钢管/矩管', '不锈钢/不锈钢管/异形管'])`,
  '商品名称': `@pick(['不锈钢装饰圆管', '花纹卷', '普板'])`,
  '预警状态': `@pick(['正常'])`
}


function checkFolderExists(folderName) {
  /* 创建文件夹 */
  return new Promise((resolve, reject) => {
    fsPomise.access(folderName).then(res => {
      console.log('文件夹已存在');
      resolve()
    }).catch(async err => {
      await fs.mkdir(folderName);
      resolve()
    });
  })
}

// 复制文件
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
  // console.log(`File copied from ${src} to ${dest}`);
}

// 复制文件夹
function copyDirectory(srcDir, destDir) {
  // 创建目标文件夹
  fs.mkdirSync(destDir, { recursive: true });

  // 读取源文件夹中的所有文件和子文件夹
  const items = fs.readdirSync(srcDir);

  items.forEach(item => {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);

    // 检查当前项是文件还是文件夹
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      // 递归复制文件夹
      copyDirectory(srcPath, destPath);
    } else {
      // 复制文件
      copyFile(srcPath, destPath);
    }
  });
}


function excludeIndexFile(file) {
  return file.name !== 'index.ts' && file.isFile()
}


function getFolderByFiles(files) {
  return files.filter(file => file.isDirectory())
}


function getFileByFiles(files) {
  return files.filter(file => excludeIndexFile(file))
}

function getSubFilesByPath(path) {
  return fs.readdirSync(path, { withFileTypes: true })
}

function getSubFolerByPath(path) {
  const subFiles = getSubFilesByPath(path)
  return getFolderByFiles(subFiles)
}

function getSubFileByPath(path) {
  const subFiles = getSubFilesByPath(path)
  return getFileByFiles(subFiles)
}

function confirmIndexFileRenderedByNamesAndOther(names, other = '') {
  const template = fs.readFileSync('indexReq.ejs', 'utf-8');
  return ejs.render(template, { fileNameArr: names, other });
}


function processCreateIndexFileByPath(filePath, rendered) {
  /* 文件创建完毕, 创建index.ts, 引入这些fileName 暴漏的所有函数 */
  fs.writeFileSync(path.join(filePath, 'index.ts'), rendered, (err) => {
    if (err) {
      console.error('写入文件失败:', err);
      return;
    }
  });
}


function createIndexFileByPath(path) {
  /* 最终确定的名称 */
  let nameArr = []

  /* 先看是否有文件夹 */
  const subFolder = getSubFolerByPath(path)

  if (subFolder.length) {
    for (let index = 0; index < subFolder.length; index++) {
      const folderFile = subFolder[index];
      const folderPath = folderFile.parentPath + '/' + folderFile.name
      /* 只有是文件夹才递归继续执行 */
      createIndexFileByPath(folderPath)
    }
    nameArr = subFolder.map(folder => folder.name)
  } else {
    const subFiles = getSubFileByPath(path)
    nameArr = subFiles.map(file => file.name)
  }

  const renderer = confirmIndexFileRenderedByNamesAndOther(nameArr, path === 'api' ? "export * from './core'" : '')
  processCreateIndexFileByPath(path, renderer)
}

function createMockFile(mockObj) {
  const obj = {}
  const folderObj = {}
  checkFolderExists('mock').then(_ => {

    /* mock文件 */
    for (const key in mockObj) {
      if (Object.prototype.hasOwnProperty.call(mockObj, key)) {
        const element = mockObj[key];

        if (element.apikey) {
          mockColumns(element.apikey)
          const itemObj = {}
          element.columns.forEach((item, index) => {
            let mockKey = ''
            if (item.title.includes('时间') || item.title.includes('日期')) {
              mockKey = `@date('yyyy-MM-dd')`
            } else {
              mockKey = mockKeyMapByName[item.title] || '@natural(1, 999)'
            }

            itemObj[`demo${index}`] = mockKey
          })



          itemObj['id'] = '@natural(1, 99999)' // 随机分配一个id, 作为表格的id
          obj[element.apikey] = itemObj

          if (element.apiFolder && element.apiFileName) {
            // 初始化 folderObj[element.apiFolder] 如果不存在
            folderObj[element.apiFolder] = folderObj[element.apiFolder] || {};

            // 初始化 folderObj[element.apiFolder][element.apiFileName] 如果不存在
            folderObj[element.apiFolder][element.apiFileName] = folderObj[element.apiFolder][element.apiFileName] || [];

            // 添加 apikey
            folderObj[element.apiFolder][element.apiFileName].push(element.apikey);
          }
        }
      }
    }
    const mockFolderPath = 'E:/gangtie-next/gangtie-next/apps/backend-mock/api/mock' // 替换你的目录
    copyDirectory('mock', mockFolderPath);


    /* mock数据文件 */
    fs.writeFileSync(path.join('mock.ts'), `export const MOCK_DATA = ${JSON.stringify(obj)}`, (err) => {
      if (err) {
        console.error('写入文件失败:', err);
        return;
      }
    });
    const mockDataFilePath = 'E:/gangtie-next/gangtie-next/apps/backend-mock/utils/mock.ts' // 替换你的目录
    copyFile(path.join('mock.ts'), mockDataFilePath);


    /* api文件 */
    Object.keys(folderObj).forEach(folderKey => {
      const folderKeyArr = (folderKey.split(/(?=[A-Z])/)).map(nameKey => nameKey.toLowerCase())
      for (let index = 1; index <= folderKeyArr.length; index++) {
        const folderPath = 'api/' + folderKeyArr.slice(0, index).join('/');
        fs.mkdirSync(folderPath, { recursive: true }, (err) => {
          if (err) {
            console.log('目录已经存在了');
          }
        })

        /* 最后的时候, 创建文件 */
        if (index === folderKeyArr.length) {
          const fileNameArr = []
          Object.keys(folderObj[folderKey]).forEach(fileName => {
            fileNameArr.push(fileName)
            const apiKeyArr = folderObj[folderKey][fileName];
            const template = fs.readFileSync('api.ejs', 'utf-8');
            const rendered = ejs.render(template, { apikeyArr: apiKeyArr, ohter: '' });
            fs.writeFileSync(path.join(folderPath, fileName + '.ts'), rendered, (err) => {
              if (err) {
                console.error('写入文件失败:', err);
                return;
              }
            });
          })

        }
      }
    })
    createIndexFileByPath('api')

    const apiFolderPath = 'E:/gangtie-next/gangtie-next/apps/web-ele/src/api' // 替换你的目录
    copyDirectory('api', apiFolderPath);

  })
}

function mockColumns(apikey) {
  const template = fs.readFileSync('template.ejs', 'utf-8');
  const rendered = ejs.render(template, { apikey });
  fs.writeFileSync(path.join('mock', apikey + '.ts'), rendered, (err) => {
    if (err) {
      console.error('写入文件失败:', err);
      return;
    }
  });
}

exports.createMockFile = createMockFile