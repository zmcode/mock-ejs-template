import { requestClient } from '#/api/request';


export async function getGetTableList() {
  return requestClient.get('/mock/refundgetTableList');
}

export async function getGetComdTableList() {
  return requestClient.get('/mock/refundgetComdTableList');
}
