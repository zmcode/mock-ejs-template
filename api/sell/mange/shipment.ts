import { requestClient } from '#/api/request';


export async function getOrderList() {
  return requestClient.get('/mock/shipmentorderList');
}

export async function getCommodityList() {
  return requestClient.get('/mock/shipmentcommodityList');
}

export async function getTakeCommodityTotalList() {
  return requestClient.get('/mock/shipmenttakeCommodityTotalList');
}

export async function getReceiptTableList() {
  return requestClient.get('/mock/shipmentreceiptTableList');
}
