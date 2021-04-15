/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-04-08 14:28:43
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-12 11:19:05
 */
import { Module } from 'vuex'
import {GlobalState} from '/@/store';
import {IndexState} from './interface'

const state :IndexState = {
    username:'taoman',
    password:'123456'
}
const  login :Module<IndexState,GlobalState> = {
    namespaced:true,
    state,
    actions:{
        async login({state}) {
            const loginMsg='登录测试'
            return loginMsg
        }
    }
}
export default login;