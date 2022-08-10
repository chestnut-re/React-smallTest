import {Service} from './request';
//获取汽车列表
export function getCarList(config: { page: string; }){
    const params = new URLSearchParams()
    params.append('page',config.page);
 
    return Service({
        // url:'./api/getCarList',
        url:'/api/v2/server_agent/payment/agent/school/manage/all',
        data:params
    })
}