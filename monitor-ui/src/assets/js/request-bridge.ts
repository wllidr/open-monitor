import request from '@/assets/js/request'
interface configParams {
  url: string,
  method?: any,
  params?: any,
  isNeedloading?: boolean
}

const requestBridge = async (config: configParams) => {
  if (config.isNeedloading === undefined) {
    config.isNeedloading = true
  }
  console.log(config.isNeedloading)
  const data = await request({
    headers: {isNeedloading: config.isNeedloading},
    url: config.url,
    method: config.method,
    params: config.params,
    data: ''
  })
  return data
}

export default requestBridge