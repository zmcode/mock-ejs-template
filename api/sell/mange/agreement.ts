import { requestClient } from '#/api/request';


export async function getSellMangeAgreemnetoOrderList() {
  return requestClient.get('/mock/agreementsellMangeAgreemnetoOrderList');
}

export async function getSellMangeAgreemnetoComList() {
  return requestClient.get('/mock/agreementsellMangeAgreemnetoComList');
}
