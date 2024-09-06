import { requestClient } from '#/api/request';


export async function getCommodityBaseList() {
  return requestClient.get('/mock/commodityBaseList');
}
