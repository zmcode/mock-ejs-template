import { requestClient } from '#/api/request';


export async function getStockInfoFlow() {
  return requestClient.get('/mock/stockInfoFlow');
}
