import { requestClient } from '#/api/request';


export async function getStockMangeAllot() {
  return requestClient.get('/mock/allotstockMangeAllot');
}

export async function getStockMangeAllotAddDetailInTable() {
  return requestClient.get('/mock/allotstockMangeAllotAddDetailInTable');
}

export async function getAllotAddDetailOutTable() {
  return requestClient.get('/mock/allotallotAddDetailOutTable');
}
