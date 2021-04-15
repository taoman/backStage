/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-04-12 16:42:50
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-12 17:02:24
 */
import { User} from "./user";
class Module {
  constructor() {
    this.user = new User()
  }
  user:User;
}

export const module = new Module()
export interface ApiModule extends Module{}