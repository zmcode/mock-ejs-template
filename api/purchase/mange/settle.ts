import { requestClient } from '#/api/request';


export async function getTableList() {
  return requestClient.get('/mock/settletableList');
}

export async function getComdTableList() {
  return requestClient.get('/mock/settlecomdTableList');
}

export async function getComdSubTableList() {
  return requestClient.get('/mock/settlecomdSubTableList');
}
