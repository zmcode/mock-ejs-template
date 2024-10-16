import { requestClient } from '#/api/request';


export async function getTableList() {
  return requestClient.get('/mock/receivetableList');
}
