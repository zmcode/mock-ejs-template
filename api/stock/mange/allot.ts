import { requestClient } from '#/api/request';


export async function getStockMangeAllot() {
  return requestClient.get('/mock/stockMangeAllot');
}

export async function getStockMangeAllotAddDetailInTable() {
  return requestClient.get('/mock/stockMangeAllotAddDetailInTable');
}

export async function getAllotAddDetailOutTable() {
  return requestClient.get('/mock/allotAddDetailOutTable');
}
