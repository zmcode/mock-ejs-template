import { requestClient } from '#/api/request';


export async function getOrderList() {
  return requestClient.get('/mock/orderorderList');
}

export async function getCommodityList() {
  return requestClient.get('/mock/ordercommodityList');
}

export async function getAddCommoityDetailList() {
  return requestClient.get('/mock/orderaddCommoityDetailList');
}

export async function getSelectProtocolList() {
  return requestClient.get('/mock/orderselectProtocolList');
}

export async function getVotesList() {
  return requestClient.get('/mock/ordervotesList');
}
