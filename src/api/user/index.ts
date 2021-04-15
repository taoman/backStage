/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-04-07 16:53:51
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-07 16:53:53
 */
import request from '/@/api/request'
import {LoginParameter} from '/@/interface/user'
export class User {
    login(data:LoginParameter){
        return request.post('/login',data)
    }
}
