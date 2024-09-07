const apiData = require('./data').default
const fs = require('fs')
const path = require('path');

const createMockFile = require('./mock').createMockFile;


function toLowerCaseFirstLetter(str) {
  if (!str) return str; // 如果字符串为空，直接返回
  return str.charAt(0).toLowerCase() + str.slice(1); // 将首字母小写并连接剩余部分
}

function clearEmptyProperties(obj) {
  for (const key in obj) {
    // 检查属性是否为空
    if (obj[key] === null ||
      obj[key] === undefined ||
      (typeof obj[key] === 'string' && obj[key].trim() === '') ||
      (Array.isArray(obj[key]) && obj[key].length === 0)) {
      delete obj[key]; // 删除空属性
    }
  }
}

const seriApiObj = {}

for (const key in apiData) {
  if (Object.hasOwnProperty.call(apiData, key)) {
    const element = apiData[key];
    const formValues = {}
    seriApiObj[key] = {
      columns: element.columns.map((item, index) => {
        const prop = 'demo' + index
        const object = {
          label: item.title,
          width: item.width,
          prop
        }
        clearEmptyProperties(object)

        if (item.fixed) {
          object.tableColumnProps = {
            fixed: item.fixed,
          }
        }


        if (element.virtual) {
          object.dataKey = prop
          object.key = prop
          object.title = item.title
          if (item.fixed) {
            object.fixed = item.fixed
          }
        }

        return object
      }),
      formData: element.formData.map(item => {
        let object = {
          prop: item.field,
          label: item.label,
        }
        if (item.component === 'ApiCascader') {
          item.component = 'cascader'
        }

        if (item.component === 'RangePicker') {
          item.component = 'date-picker'
          object.fieldProps = {
            type: 'daterange'
          }
        }

        formValues[item.field] = ''
        object.valueType = toLowerCaseFirstLetter(item.component)
        return object
      }),
    };
    seriApiObj[key].formValues = formValues
  }
}


fs.writeFileSync(path.join('seriApiObj.json'), `${JSON.stringify(seriApiObj)}`, (err) => {
  if (err) {
    console.error('写入文件失败:', err);
    return;
  }
});

createMockFile(apiData)
