const apiData = {
  '商品-商品管理-商品列表': {
    apikey: 'commodityMangerList',
    apiFolder: 'commodityManger',
    apiFileName: 'list',
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
  '商品-商品管理-商品列表-新增': {
    apikey: 'commodityMangerListAdd',
    apiFolder: 'commodityManger',
    apiFileName: 'list',
    columns: [
      {
        title: '商品类别',
        fixed: 'left',
        dataIndex: 'name',
        width: 100,
      },
      {
        title: '类别编码',
        dataIndex: 'name',
      },
      {
        title: '商品名称',
        dataIndex: 'address',
      },
      {
        title: '细分名称',
        dataIndex: 'beginTime',
      },
      {
        title: '助记码',
        dataIndex: 'endTime',
      },
    ],
    formData: [
      {
        field: 'field1',
        component: 'Cascader',
        label: '商品编号',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请选择商品编号',
        },
      },
      {
        field: 'field2',
        component: 'Input',
        label: '商品名称',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请输入商品名称',
        },
      },
      {
        field: 'field3',
        component: 'Input',
        label: '细分名称',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请输入细分名称',
        },
      },
      {
        field: 'field4',
        component: 'Input',
        label: '助记码',
        colProps: {
          span: 12,
        },
        componentProps: {
          placeholder: '请输入助记码',
        },
      },
    ]
  },
  '商品-商品设置-商品资料库': {
    apikey: 'commoditySettingInfo',
    apiFileName: 'info',
    apiFolder: 'commoditySet',
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
  },
  '商品-基础与加价': {
    apikey: 'commodityBaseList',
    apiFileName: 'list',
    apiFolder: 'commodityBase',
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
        label: '产地',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请输入产地',
        },
      },
      {
        field: 'field3',
        component: 'Select',
        label: '仓库',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择仓库',
          options: [
            {
              value: 1,
              label: '仓库1',
            },
            {
              value: 0,
              label: '仓库2',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
    ],
    columns: [
      {
        title: '商品类别',
        dataIndex: 'id',
        fixed: 'left',
        width: 100,
      },
      {
        title: '产地',
        dataIndex: 'name',
        helpMessage: '我是姓名啊啊啊',
      },
      {
        title: '仓库',
        dataIndex: 'address',
      },
      {
        title: '基价',
        dataIndex: 'no',
        defaultHidden: true,
      },
      {
        title: '开始时间',
        dataIndex: 'beginTime',
      },
      {
        title: '结束时间',

        dataIndex: 'endTime',
      },
    ]
  },
  '库存-库存统计-库存查询': {
    apikey: 'stockInfoList',
    apiFolder: 'stockInfo',
    apiFileName: 'list',
    columns: [
      {
        title: '类别',
        dataIndex: 'id',
        fixed: 'left',
        width: 100,
      },
      {
        title: '材质',
        dataIndex: 'name',
        helpMessage: '我是姓名啊啊啊',
      },
      {
        title: '规格',
        dataIndex: 'address',
      },
      {
        title: '产地',
        dataIndex: 'no',
        defaultHidden: true,
      },
      {
        title: '仓库',
        dataIndex: 'beginTime',
      },
      {
        title: '库存数量',
        dataIndex: 'endTime',
      },
      {
        title: '库存重量',
        dataIndex: 'endTime',
      },
      {
        title: '冻结数量',
        dataIndex: 'endTime',
      },
      {
        title: '冻结重量',
        dataIndex: 'endTime',
      },
      {
        title: '可售数量',
        dataIndex: 'endTime',
      },
      {
        title: '可售重量',
        dataIndex: 'endTime',
      },
      {
        title: '累计可售重量',
        dataIndex: 'endTime',
      },
      {
        title: '入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '入库成本',
        dataIndex: 'endTime',
      },
      {
        title: '库存均价',
        dataIndex: 'endTime',
      },
      {
        title: '库存成本',
        dataIndex: 'endTime',
      },
      {
        title: '货主',
        dataIndex: 'endTime',
      },
      {
        title: '货权类型',
        dataIndex: 'endTime',
      },
      {
        title: '重量单位',
        dataIndex: 'endTime',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field44',
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
        field: 'field55',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
    ]
  },
  '库存-库存统计-批次库存': {
    apikey: 'stockInfoLot',
    apiFolder: 'stockInfo',
    apiFileName: 'lot',
    columns: [
      {
        title: '商品编码',
        dataIndex: 'id',
        fixed: 'left',
        width: 100,
      },
      {
        title: '商品类别',
        dataIndex: 'name',
        helpMessage: '我是姓名啊啊啊',
      },
      {
        title: '材质',
        dataIndex: 'address',
      },
      {
        title: '规格',
        dataIndex: 'address',
      },
      {
        title: '产地',
        dataIndex: 'no',
        defaultHidden: true,
      },
      {
        title: '仓库',
        dataIndex: 'beginTime',
      },
      {
        title: '计量方式',
        dataIndex: 'endTime',
      },
      {
        title: '加工品类型',
        dataIndex: 'endTime',
      },
      {
        title: '库存数量',
        dataIndex: 'endTime',
      },
      {
        title: '库存重量',
        dataIndex: 'endTime',
      },
      {
        title: '冻结数量',
        dataIndex: 'endTime',
      },
      {
        title: '冻结重量',
        dataIndex: 'endTime',
      },
      {
        title: '可售数量',
        dataIndex: 'endTime',
      },
      {
        title: '可售重量',
        dataIndex: 'endTime',
      },
      {
        title: '入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '含税入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '不含税入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '调整入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '实际入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '库存成本',
        dataIndex: 'endTime',
      },
      {
        title: '含税库存成本',
        dataIndex: 'endTime',
      },

      {
        title: '不含税库存成本',
        dataIndex: 'endTime',
      },
      {
        title: '调整库存成本',
        dataIndex: 'endTime',
      },
      {
        title: '不含税入库单价',
        dataIndex: 'endTime',
      },
      {
        title: '实际库存成本',
        dataIndex: 'endTime',
      },
      {
        title: '渠道售价',
        dataIndex: 'endTime',
      },
      {
        title: '两票费用单价',
        dataIndex: 'endTime',
      },
      {
        title: '两票成本',
        dataIndex: 'endTime',
      },

      {
        title: '入库单价（包含两票）',
        dataIndex: 'endTime',
      },
      {
        title: '库存成本（包含两票）',
        dataIndex: 'endTime',
      },
      {
        title: '捆包号',
        dataIndex: 'endTime',
      },

      {
        title: '货位号',
        dataIndex: 'endTime',
      },
      {
        title: '单据类型',
        dataIndex: 'endTime',
      },
      {
        title: '单据编号',
        dataIndex: 'endTime',
      },
      {
        title: '批号',
        dataIndex: 'endTime',
      },
      {
        title: '工程项目',
        dataIndex: 'endTime',
      },
      {
        title: '本方公司',
        dataIndex: 'endTime',
      },
      {
        title: '所属部门',
        dataIndex: 'endTime',
      },

      {
        title: '货源',
        dataIndex: 'endTime',
      },

      {
        title: '供应商',
        dataIndex: 'endTime',
      },
      {
        title: '货主',
        dataIndex: 'endTime',
      },
      {
        title: '货权类型',
        dataIndex: 'endTime',
      },
      {
        title: '单件重',
        dataIndex: 'endTime',
      },
      {
        title: '税率',
        dataIndex: 'endTime',
      },
      {
        title: '入库日期',
        dataIndex: 'endTime',
      },
      {
        title: '采购订单号',
        dataIndex: 'endTime',
      },
      {
        title: '来货车船号',
        dataIndex: 'endTime',
      },

      {
        title: '数量单位',
        dataIndex: 'endTime',
      },
      {
        title: '重量单位',
        dataIndex: 'endTime',
      },
      {
        title: '计价单位',
        dataIndex: 'endTime',
      },
      {
        title: '批次备注',
        dataIndex: 'endTime',
      },
      {
        title: '锁定状态',
        dataIndex: 'endTime1',
        fixed: 'right',
        checked1: false,
      },
      {
        title: '隐藏状态',
        dataIndex: 'endTime2',
        fixed: 'right',
        checked: true,
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field44',
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
        field: 'field55',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
    ]
  },
  '库存-库存统计-库存流水': {
    apikey: 'stockInfoFlow',
    apiFolder: 'stockInfo',
    apiFileName: 'flow',
    columns: [
      {
        title: '交易日期',
        dataIndex: 'endTime',
        fixed: 'left',
        width: 100,
      },
      {
        title: '单据类型',
        dataIndex: 'name',
        helpMessage: '我是姓名啊啊啊',
      },
      {
        title: '出入库方向',
        dataIndex: 'address',
      },
      {
        title: '单据编号',
        dataIndex: 'no',
        defaultHidden: true,
      },
      {
        title: '商品编码',
        dataIndex: 'beginTime',
      },
      {
        title: '商品名称',
        dataIndex: 'endTime',
      },
      {
        title: '商品类别',
        dataIndex: 'endTime',
      },
      {
        title: '材质',
        dataIndex: 'endTime',
      },
      {
        title: '规格',
        dataIndex: 'endTime',
      },
      {
        title: '产地',
        dataIndex: 'endTime',
      },
      {
        title: '仓库',
        dataIndex: 'endTime',
      },
      {
        title: '计量方式',
        dataIndex: 'endTime',
      },
      {
        title: '交易数量',
        dataIndex: 'endTime',
      },
      {
        title: '交易重量',
        dataIndex: 'endTime',
      },
      {
        title: '捆包号',
        dataIndex: 'endTime',
      },
      {
        title: '工程项目',
        dataIndex: 'endTime',
      },
      {
        title: '本方公司',
        dataIndex: 'endTime',
      },
      {
        title: '供应商',
        dataIndex: 'endTime',
      },
      {
        title: '客户',
        dataIndex: 'endTime',
      },

      {
        title: '货主',
        dataIndex: 'endTime',
      },
      {
        title: '货权类型',
        dataIndex: 'endTime',
      },
      {
        title: '采购订单号',
        dataIndex: 'endTime',
      },

      {
        title: '销售订单号',
        dataIndex: 'endTime',
      },
      {
        title: '批号',
        dataIndex: 'endTime',
      },
      {
        title: '数量单位',
        dataIndex: 'endTime',
      },
      {
        title: '重量单位',
        dataIndex: 'endTime',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field44',
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
        field: 'field55',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
    ]
  },
  '库存-库存统计-进销存查询': {
    apikey: 'stockInfoSearch',
    apiFolder: 'stockInfo',
    apiFileName: 'search',
    columns: [
      {
        title: '商品名称',
        dataIndex: 'id',
        fixed: 'left',
        width: 100,
      },
      {
        title: '商品类别',
        dataIndex: 'name',
        helpMessage: '我是姓名啊啊啊',
      },
      {
        title: '材质',
        dataIndex: 'address',
      },
      {
        title: '规格',
        dataIndex: 'no',
        defaultHidden: true,
      },
      {
        title: '产地',
        dataIndex: 'beginTime',
      },
      {
        title: '仓库',
        dataIndex: 'endTime',
      },
      {
        title: '期初数量',
        dataIndex: 'switch',
      },
      {
        title: '期初重量',
        dataIndex: 'beginTime',
      },
      {
        title: '期初库存单价',
        dataIndex: 'endTime',
      },
      {
        title: '期初库存金额',
        dataIndex: 'switch',
      },
      {
        title: '入库数量',
        dataIndex: 'beginTime',
      },
      {
        title: '入库金额',
        dataIndex: 'endTime',
      },
      {
        title: '入库均价',
        dataIndex: 'switch',
      },
      {
        title: '入库重量',
        dataIndex: 'beginTime',
      },
      {
        title: '出库数量',
        dataIndex: 'endTime',
      },
      {
        title: '出库金额',
        dataIndex: 'switch',
      },

      {
        title: '出库均价',
        dataIndex: 'beginTime',
      },
      {
        title: '出库重量',
        dataIndex: 'endTime',
      },
      {
        title: '库存调整数量',
        dataIndex: 'switch',
      },
      {
        title: '库存调整重量',
        dataIndex: 'beginTime',
      },
      {
        title: '库存调拨数量',
        dataIndex: 'endTime',
      },
      {
        title: '库存调拨重量',
        dataIndex: 'switch',
      },

      {
        title: '加工数量',
        dataIndex: 'beginTime',
      },
      {
        title: '期末数量',
        dataIndex: 'endTime',
      },
      {
        title: '期末库存单价',
        dataIndex: 'switch',
      },
      {
        title: '期末库存单价',
        dataIndex: 'beginTime',
      },
      {
        title: '本方公司',
        dataIndex: 'endTime',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field44',
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
        field: 'field55',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
    ]
  },
  '库存-库存管理-库存调整': {
    apikey: 'stockMangeAdjust',
    apiFolder: 'stockMange',
    apiFileName: 'adjust',
    columns: [
      {
        title: '库存调整日期',
        dataIndex: 'beginTime',
        fixed: 'left',
        width: 100,
      },
      {
        title: '仓库',
        dataIndex: 'endTime',
      },
      {
        title: '类型',
        dataIndex: 'endTime',
      },
      {
        title: '单据编号',
        dataIndex: 'beginTime',
      },
      {
        title: '调整原因',
        dataIndex: 'endTime',
      },
      {
        title: '调整数量',
        dataIndex: 'switch',
      },
      {
        title: '调整重量',
        dataIndex: 'beginTime',
      },
      {
        title: '调整成本',
        dataIndex: 'endTime',
      },
      {
        title: '本方公司',
        dataIndex: 'switch',
      },
      {
        title: '货主',
        dataIndex: 'beginTime',
      },
      {
        title: '业务员',
        dataIndex: 'endTime',
      },
      {
        title: '来源销售单号',
        dataIndex: 'switch',
      },

      {
        title: '来源单据类型',
        dataIndex: 'beginTime',
      },
      {
        title: '来源单据编号',
        dataIndex: 'endTime',
      },
      {
        title: '操作人',
        dataIndex: 'switch',
      },
      {
        title: '创建时间',
        dataIndex: 'beginTime',
      },
      {
        title: '更新时间',
        dataIndex: 'endTime',
      },
      {
        title: '重量单位',
        dataIndex: 'switch',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
      {
        field: 'field4',
        component: 'Select',
        label: '商品类别',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: '请选择商品类别',
        },
      },
      {
        field: 'field44',
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
        field: 'field55',
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
              label: '是',
            },
            {
              value: 0,
              label: '否',
            },
          ],
        },
      },
    ]
  },
  "库存-库存管理-库存调整-新建库存调整": {
    virtual: true,
    columns: [
      {
        title: '商品编号',
        dataIndex: 'address',
        fixed: 'left',
      },
      {
        title: '商品名称',
        dataIndex: 'address',
      },
      {
        title: '材质',
        dataIndex: 'address',
      },
      {
        title: '产地',
        dataIndex: 'address',
      },
      {
        title: '规格',
        dataIndex: 'address',
      },
      {
        title: '实际厚度',
        dataIndex: 'width1',
      },
      {
        title: '计量方式',
        dataIndex: 'width2',
      },
      {
        title: '调整数量',
        dataIndex: 'width1',
      },
      {
        title: '调整重量',
        dataIndex: 'width1',
      },
      {
        title: '单件重',
        dataIndex: 'width1',
      },
      {
        title: '入库单价',
        dataIndex: 'width1',
      },
      {
        title: '入库成本',
        dataIndex: 'width1',
      },
      {
        title: '捆包号',
        dataIndex: 'width1',
      },
      {
        title: '货位号',
        dataIndex: 'width1',
      },
      {
        title: '计价单位',
        dataIndex: 'width1',
      },
      {
        title: '重量单位',
        dataIndex: 'width1',
      },
      {
        title: '数量单位',
        dataIndex: 'width1',
      },
      {
        title: '供应商',
        dataIndex: 'width1',
      },
      {
        title: '批号',
        dataIndex: 'width1',
      },
      {
        title: '自编号',
        dataIndex: 'width1',
      },
      {
        title: '长度',
        dataIndex: 'width1',
      },
      {
        title: '密度值',
        dataIndex: 'width1',
      },
    ],
    formData:[]
  },
  '库存-库存管理-库存调拨': {
    apikey: 'stockMangeAllot',
    apiFolder: 'stockMange',
    apiFileName: 'allot',
    columns: [
      {
        title: '库存调拨日期',
        dataIndex: 'beginTime',
        fixed: 'left',
        width: 100,
      },
      {
        title: '调出仓库',
        dataIndex: 'endTime',
      },
      {
        title: '调入仓库',
        dataIndex: 'endTime',
      },
      {
        title: '调出公司',
        dataIndex: 'beginTime',
      },
      {
        title: '调入公司',
        dataIndex: 'endTime',
      },
      {
        title: '单据编号',
        dataIndex: 'switch',
      },
      {
        title: '总重量',
        dataIndex: 'beginTime',
      },
      {
        title: '总金额（元）',
        dataIndex: 'endTime',
      },
      {
        title: '调拨费用金额（元）',
        dataIndex: 'switch',
      },
      {
        title: '业务员',
        dataIndex: 'beginTime',
      },
      {
        title: '操作人',
        dataIndex: 'endTime',
      },
      {
        title: '创建时间',
        dataIndex: 'endTime',
      },
    
      {
        title: '更新时间',
        dataIndex: 'beginTime',
      },
      {
        title: '重量单位',
        dataIndex: 'endTime',
      },
    ],
    formData:[]
  }
}
exports.default = apiData