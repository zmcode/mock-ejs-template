import { requestClient } from '#/api/request';


export async function getGetTableList() {
  return requestClient.get('/mock/onlyrefundgetTableList');
}

export async function getGetComdTableList() {
  return requestClient.get('/mock/onlyrefundgetComdTableList');
}
