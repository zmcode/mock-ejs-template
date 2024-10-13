import { requestClient } from '#/api/request';


export async function getPurchaseAgerableList() {
  return requestClient.get('/mock/purchasepurchaseAgerableList');
}

export async function getPurchaseComdTableList() {
  return requestClient.get('/mock/purchasepurchaseComdTableList');
}

export async function getComdDetailTableList() {
  return requestClient.get('/mock/purchasecomdDetailTableList');
}
