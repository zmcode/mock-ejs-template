import { requestClient } from '#/api/request';


export async function getOrderList() {
  return requestClient.get('/mock/takeGoodsorderList');
}

export async function getCommodityList() {
  return requestClient.get('/mock/takeGoodscommodityList');
}
