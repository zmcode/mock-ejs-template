import { requestClient } from '#/api/request';


export async function getStockInfoList() {
  return requestClient.get('/mock/stockInfoList');
}
