import { requestClient } from '#/api/request';


export async function getOrderList() {
  return requestClient.get('/mock/orderList');
}

export async function getCommodityList() {
  return requestClient.get('/mock/commodityList');
}

export async function getAddCommoityDetailList() {
  return requestClient.get('/mock/addCommoityDetailList');
}

export async function getSelectProtocolList() {
  return requestClient.get('/mock/selectProtocolList');
}
