import { requestClient } from '#/api/request';


export async function getSellMangeListAdd() {
  return requestClient.get('/mock/sellMangeListAdd');
}
