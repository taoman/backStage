/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-04-07 16:58:24
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-26 13:21:55
 */
export namespace UserInterface{
  export interface LoginIntreface {
    code: string
    data: LoginData[]
    msg: string
  }
  export interface LoginData {
    token: string
    username: string
    user_id: number
  }
  export interface CreateParameter{
    title:string;
    name:string;
    img_url:string;
  }
export interface LoginParameter{
  username:string;
  password:string;
}
export interface IndexParameter{
  title?:string;
  name?:string;
}

export interface IndexInterface<T=any> {
  status: number
  msg: string
  data:IndexData[]
}

export interface IndexData {
  id: number
  title: string
  name: string
  img_url?: string
  type_id?: number
  types?: Types
}

export interface Types {
  id: number
  type_name: string
  type_title: string
}

}


  