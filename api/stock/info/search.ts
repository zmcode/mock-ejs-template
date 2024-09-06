import { requestClient } from '#/api/request';


export async function getStockInfoSearch() {
  return requestClient.get('/mock/stockInfoSearch');
}
