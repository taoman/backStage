/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-04-07 16:53:51
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-26 13:20:37
 */
import request from '/@/api/request'
import {UserInterface} from '/@/interface/user'
export class User {
    login(data:UserInterface.LoginParameter){
        return request.post<UserInterface.LoginIntreface>('/login',data)
    }
    index<T>(data?:UserInterface.IndexParameter){
        return request.get<UserInterface.IndexInterface<T>>('/user',{params:data})
    }
    show(id:number){
        return request.get(`/show/:${id}`)
    }
    destory(id:number){
        return request.delete(`/destory/:${id}`)
    }
    update(id:number,data:UserInterface.CreateParameter){
        return request.patch(`/update/:${id}`,data)
    }
    create(data:UserInterface.CreateParameter){
        return request.post('/create',data)
    }
}
