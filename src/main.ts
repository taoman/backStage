import { createApp } from "vue";
import router from "/@/router";
import store from "/@/store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { message } from 'ant-design-vue'
import App from "/@/App.vue";
import "/@/styles/index.scss";
import {module,ApiModule} from '/@/api'
// import {stores} from '/@/store/store-enter'
const app = createApp(App);
declare module "@vue/runtime-core" {
      interface ComponentCustomProperties {
        $module: ApiModule;
      }
      interface ComponentCustomProperties {
        $message: any;
      }
     }
app.config.globalProperties.$module = module
app.config.globalProperties.$message = message

// declare 
app.use(router);
app.use(store);
app.use(Antd);
app.mount("#app");
