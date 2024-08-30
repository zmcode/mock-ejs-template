const apiData = require('./data').default


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
      columns: element.columns.map(item => {
        const object = {
          label: item.title,
          width: item.width,
          prop: item.dataIndex,
          fixed: item.fixed
        }
        clearEmptyProperties(object)
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

console.log(seriApiObj, 'seriApiObj');