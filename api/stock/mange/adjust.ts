import { requestClient } from '#/api/request';


export async function getStockMangeAdjust() {
  return requestClient.get('/mock/stockMangeAdjust');
}
