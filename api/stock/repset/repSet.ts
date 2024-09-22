import { requestClient } from '#/api/request';


export async function getStockRepSetList() {
  return requestClient.get('/mock/repSetstockRepSetList');
}
