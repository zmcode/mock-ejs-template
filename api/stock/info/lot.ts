import { requestClient } from '#/api/request';


export async function getStockInfoLot() {
  return requestClient.get('/mock/lotstockInfoLot');
}
