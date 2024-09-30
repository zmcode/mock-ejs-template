import { requestClient } from '#/api/request';


export async function getSettleTableList() {
  return requestClient.get('/mock/settlesettleTableList');
}

export async function getSettleComdTableList() {
  return requestClient.get('/mock/settlesettleComdTableList');
}

export async function getSettleComdSubTableList() {
  return requestClient.get('/mock/settlesettleComdSubTableList');
}
