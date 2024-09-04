import { requestClient } from '#/api/request';


export async function getCommodityMangerList() {
  return requestClient.get('/mock/commodityMangerList');
}

export async function getCommodityMangerListAdd() {
  return requestClient.get('/mock/commodityMangerListAdd');
}
