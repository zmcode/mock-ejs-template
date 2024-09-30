import { requestClient } from '#/api/request';


export async function getOrderList() {
  return requestClient.get('/mock/takeGoodsorderList');
}

export async function getCommodityList() {
  return requestClient.get('/mock/takeGoodscommodityList');
}

export async function getDeliveryTableList() {
  return requestClient.get('/mock/takeGoodsdeliveryTableList');
}
