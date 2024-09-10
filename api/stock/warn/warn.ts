import { requestClient } from '#/api/request';


export async function getStockWarnList() {
  return requestClient.get('/mock/stockWarnList');
}
