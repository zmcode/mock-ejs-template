const apiData = {
  '商品-商品管理-商品列表': {
    apikey: 'commodityMangerList',
    columns: [
      {
        title: '商品编码',
        width: 140,
        helpMessage: '头部的提示文本',
        fixed: 'left',
        dataIndex: 'demo0',
      },
      {
        title: '商品类别',
        width: 180,
        dataIndex: 'demo1',
      },
      {
        title: '商品名称',
        width: 160,
        dataIndex: 'demo2',
      },
      {
        title: '细分名称',
        width: 140,
        dataIndex: 'demo3',
      },
      {
        title: '材质',
        width: 80,
        dataIndex: 'demo4',
      },
      {
        title: '规格',
        width: 140,
        dataIndex: 'demo5',
      },
      {
        title: '产地',
        width: 100,
        dataIndex: 'demo6',
      },
      {
        title: '工艺',
        width: 140,
        dataIndex: 'demo7',
      },
      {
        title: '形状',
        width: 80,
        dataIndex: 'demo8',
      },
      {
        title: '表面',
        width: 100,
        dataIndex: 'demo9',
      },
      {
        title: '硬度',
        width: 100,
        dataIndex: 'demo10',
      },
      {
        title: '钢印',
        width: 80,
        dataIndex: 'demo11',
      },
      {
        title: '等级',
        width: 80,
        dataIndex: 'demo12',
      },
    ],
    formData: [
      {
        field: 'field1',
        component: 'Cascader',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择类目',
        },
      },
      {
        field: 'field2',
        component: 'Input',
        label: '商品编号',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请输入商品编号',
        },
      },
      {
        field: 'field3',
        component: 'Select',
        label: '是否启用',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择启用状态',
          options: [
            {
              value: 1,
              label: '启用',
            },
            {
              value: 0,
              label: '关闭',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'ApiCascader',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field5',
        component: 'RangePicker',
        label: '创建日期',
        colProps: {
          span: 8,
        },
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
          placeholder: ['开始日期', '结束日期'],
        },
      },
      {
        field: 'field6',
        component: 'Select',
        label: '状态',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: 'Select',
          options: [
            {
              value: 1,
              label: 1,
            },
            {
              value: 2,
              label: 2,
            },
          ],
        },
      },
    ]
  },
  '商品-商品设置-商品资料库': {
    columns: [
      {
        title: '类别编码',
        width: 140,
        dataIndex: 'demo0',
        fixed: 'left',
      },
      {
        title: '类别',
        width: 180,
        dataIndex: 'demo1',
      },
      {
        title: '商品名称',
        width: 160,
        dataIndex: 'demo2',
      },
      {
        title: '细分名称',
        width: 120,
        dataIndex: 'demo3',
      },
      {
        title: '助记码',
        width: 160,
        dataIndex: 'demo4',
      },
      {
        title: '规格格式',
        width: 220,
        dataIndex: 'demo5',
      },
      {
        title: '密度值',
        width: 120,
        dataIndex: 'demo6',
      },
      {
        title: '计量方式',
        width: 100,
        dataIndex: 'demo7',
      },
      {
        title: '数量单位',
        width: 100,
        dataIndex: 'demo8',
      },
      {
        title: '重量单位',
        width: 100,
        dataIndex: 'demo9',
      },
      {
        title: '计价单位',
        width: 100,
        dataIndex: 'demo10',
      },
      {
        title: '税率',
        width: 100,
        dataIndex: 'demo11',
      },
      {
        title: '属性数量',
        width: 100,
        dataIndex: 'demo12',
      },
      {
        title: '创建人',
        width: 100,
        dataIndex: 'demo13',
      },
      {
        title: '更新人',
        width: 100,
        dataIndex: 'demo14',
      },
      {
        title: '更新时间',
        width: 160,
        dataIndex: 'demo15',
      },
      {
        title: '商品备注',
        width: 100,
        dataIndex: 'demo16',
      },
      {
        title: '发票税务编码',
        width: 120,
        dataIndex: 'demo17',
      },
    ],
    formData: [
      {
        field: 'field1',
        component: 'Cascader',
        label: '商品类别',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请选择类目',
        },
      },
      {
        field: 'field2',
        component: 'Input',
        label: '商品编号',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请输入商品编号',
        },
      },

      {
        field: 'field4',
        component: 'ApiCascader',
        label: '商品类别',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field5',
        component: 'Input',
        label: '商品编号',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请输入商品编号',
        },
      },
    ]
  }
}
exports.default = apiData