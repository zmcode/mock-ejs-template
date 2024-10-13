import { requestClient } from '#/api/request';


export async function getArgeTableList() {
  return requestClient.get('/mock/orderargeTableList');
}

export async function getCommodityList() {
  return requestClient.get('/mock/ordercommodityList');
}

export async function getCommodityDetailList() {
  return requestClient.get('/mock/ordercommodityDetailList');
}

export async function getVotesList() {
  return requestClient.get('/mock/ordervotesList');
}
