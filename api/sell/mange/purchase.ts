import { requestClient } from '#/api/request';


export async function getPurchaseComdTableList() {
  return requestClient.get('/mock/purchasepurchaseComdTableList');
}
