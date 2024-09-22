import { requestClient } from '#/api/request';


export async function getCommoditySettingInfo() {
  return requestClient.get('/mock/infocommoditySettingInfo');
}
