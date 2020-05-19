import axios from 'axios'
import { getToken } from '@/assets/js/cookies.ts'
declare function require(img: string): string;  // 声明
import $ from 'jquery'

const service = axios.create({
  baseURL: 'http://129.204.99.160:38080/wecube-monitor/api/v1',
  timeout: 5000
})
const mergeConfig = (config: any) => {
  let httpConfig = {
    isNeedloading: true
  }
  return Object.assign(httpConfig, config)
}

export const loading = {
  start: ()=>{
    let htmlLevel1 ='<div id="loadingContainer" class="loadingContainer" style="width: 100%;height: 100%;position: fixed;bottom: 0;text-align: center;opacity: 0.5;z-index:9000">'
    let hmtlLevel2='<img src='+ require('@/assets/img/loading.gif') +' class="loadingImg" style="display: inline-block;width: 4rem; height: 4rem;position: absolute;top: 50%; left: 50%; margin-top: -62px; margin-left: -62px;"></div>'
    if ($('#loadingContainer')) {
      $('#loadingContainer').remove()
      $('body').append(htmlLevel1 + hmtlLevel2)
    }
  },
  end: () => {
    if($('#loadingContainer')) {
      $('#loadingContainer').remove()
    }
  }
}

// Request interceptors
service.interceptors.request.use(
  (config) => {
    const mergerConfig = mergeConfig(config)
    config.headers['X-Auth-Token'] = getToken()
    if (mergerConfig.isNeedloading) {
      loading.start()
    }
    console.log(mergerConfig)
    return mergerConfig
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    console.log(5)
    loading.end()
    return response.data
  },
  (error) => {
    console.log(6)
    return Promise.reject(error)
  }
)

export default service
