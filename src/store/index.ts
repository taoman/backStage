import { createStore } from "vuex";
import {IndexState} from './modules/Login/interface'
import login from './modules/Login'
export interface GlobalState{
    login:IndexState
}
export default createStore<GlobalState>({
    modules:{
        login
    }
});
