import { requestClient } from '#/api/request';


export async function getStockMangeAllot() {
  return requestClient.get('/mock/stockMangeAllot');
}
