/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-04-07 16:58:24
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-07 17:00:02
 */
export interface UserInterface {
    code: string;
    data: TokenIndex[];
    msg: string;
  }
export interface LoginParameter{
  username:string;
  password:string;
}
  export interface TokenIndex {
    token: string;
    username: string;
    user_id: number;
  }