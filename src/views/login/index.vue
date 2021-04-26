<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-03-03 09:53:57
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-15 15:18:39
-->
<template>
    <div class="login">
        <div class="frame">
            <div class="center logo">
                <img src="../../assets/img/favicon.png" alt="" />
            </div>
            <input
                type="text"
                v-model="formState.username"
                placeholder="请输入用户名"
            />
            <input
                type="password"
                v-model="formState.password"
                placeholder="请输入密码"
                @keyup.enter="goMain"
            />
            <div class="button center" @click="goMain">登录</div>
        </div>
        <div id="waves"></div>
    </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import {
    defineComponent,
    onMounted,
    reactive,
    UnwrapRef,
    getCurrentInstance,
    ComponentInternalInstance
} from 'vue'
import { useStore } from 'vuex'
import AppPointwave from '/@/components/AppWaves/index.vue'
import Waves from '/@/utils/waves'
import { message } from 'ant-design-vue'
interface FormState {
    username: string
    password: string
}
export default defineComponent({
    setup() {
        sessionStorage.name = 'admin'
        function init() {
            let container: any = document.getElementById('waves')
            let waves = new Waves(container, true, true, true)
            waves.init()
        }
        onMounted(() => {
            init()
        })
        const formState: UnwrapRef<FormState> = reactive({
            username: '',
            password: ''
        })

        const { proxy } = getCurrentInstance() as ComponentInternalInstance
        const router = useRouter()
        const goMain = async () => {
            const data = {
                username: formState.username,
                password: formState.password
            }
            const res = await proxy?.$module.user.login(data)
            if (res?.data.code == '200') {
                let token = res.data.data[0].token
                sessionStorage.token = token
                router.push({ name: 'home' })
            } else {
                proxy?.$message.error('账号或密码错误')
                console.log(proxy?.$message)
            }
        }

        return {
            formState,
            goMain
        }
    },
    components: {
        UserOutlined,
        LockOutlined,
        AppPointwave
    }
})
</script>
<style lang="less" scoped>
.login {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
}
.frame {
    position: absolute;
    width: 20vw;
    height: 30vh;
    margin-left: 50%;
    margin-top: 50vh;
    transform: translate(-50%, -65%); /* 50%为自身尺寸的一半 */
    color: #fff;
    text-align: center;
    z-index: 9999;
    // border: 1px solid pink;
    input {
        display: block;
        background-color: transparent;
        border: none;
        border-bottom: 0.2vh solid #00ffd1;
        margin-top: 3vh;
        width: 100%;
        color: #fff;
        border-radius: 10px;
        text-align: center;
    }
    input::-webkit-input-placeholder {
        color: #fff;
        // text-align: center;
    }
    .button {
        margin-top: 6vh;
        width: 100%;
        background-color: #52ad9c;
        height: 4vh;
        line-height: 4vh;
    }
    input:focus {
        outline: none;
    }
}
.logo {
    height: 30%;
    img {
        width: 5vw;
    }
}
#waves {
    width: 100%;
    height: 100%;
    // background-image: radial-gradient(circle, rgb(3, 3, 63), rgb(1, 6, 24), #000);
    // background: url('https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png');
    background: url('../../assets/img/background.png');
}
</style>

