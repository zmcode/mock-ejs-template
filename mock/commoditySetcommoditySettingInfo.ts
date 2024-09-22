import Mock from 'mockjs';

export default eventHandler((event) => {
  const token = getHeader(event, 'Authorization');

  if (!token) {
    setResponseStatus(event, 401);
    return useResponseError('UnauthorizedException', 'Unauthorized Exception');
  }

  const data = Mock.mock({
    'list|20': [MOCK_DATA.commoditySetcommoditySettingInfo],
    total: 20,
  });
  return useResponseSuccess(data);
});
