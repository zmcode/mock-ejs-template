const apiData = require('./data').default
const { name } = require('ejs');
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
const longWidthLabel = ['规格', '产地', '重量单位', '商品名称', '计价单位']

for (const key in apiData) {
  if (Object.hasOwnProperty.call(apiData, key)) {
    const element = apiData[key];
    const formValues = {}
    if (!element.formData) {
      element.formData = []
    }
    seriApiObj[key] = {
      columns: [],
      formData: element.formData.map((item, index) => {
        let object = {
          prop: item.field || 'prop' + index,
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

        if (item.component === 'DatePicker') {
          item.component = 'date-picker'
        }

        if (item.component === 'CheckboxGroup') {
          item.component = 'checkbox'
        }

        if (item.component === 'InputNumber') {
          item.component = 'input-number'
        }

        if (item.component === 'ApiRadioGroup') {
          item.component = 'radio'

        }

        if (item.component === 'inputTextArea') {
          item.component = 'input'
          object.fieldProps = { type: 'textarea' }
        }


        if (item.component === 'Select') {
          object.fieldProps = { teleported: false }
        }

        if (item.componentProps && item.componentProps.options) {
          object.options = item.componentProps.options
        }

        if (!item.component) {
          item.component = 'input'
        }

        formValues[object.prop] = ''
        object.valueType = toLowerCaseFirstLetter(item.component)
        return object
      }),
    };
    if (Array.isArray(element.columns)) {
      seriApiObj[key].columns = element.columns.map((item, index) => {
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
          object.width = item.width || 150

        }

        if (item.title.length >= 5 || item.title.includes('日期') || item.title.includes('时间')|| longWidthLabel.includes(item.title)) {
          object.width = 140
        }

        return object
      })
    } else {
      seriApiObj[key].columns = element.columns.split(',').filter(item => item).map((label, index) => {
        const prop = 'demo' + index
        const object = {
          label,
          prop
        }
        if (element.virtual) {
          object.dataKey = prop
          object.key = prop
          object.title = label
          object.width = 150
        }

        if (label.length >= 5 || label.includes('日期') || label.includes('时间') || longWidthLabel.includes(label)) {
          object.width = 140
        }

        return object
      })
    }
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
