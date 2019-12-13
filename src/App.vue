<template>
    <div id="app" class="mdui-drawer-body-left mdui-appbar-with-toolbar mdui-theme-primary-indigo mdui-theme-accent-pink mdui-loaded">
        <router-view v-if="username != ''" />
        <div v-if=" username == ''">
            <div class="mdui-container mi_home">
                <h1 class="doc-title mdui-text-color-theme">欢迎进入OA审批流平台</h1>
                <div class="mdui-textfield">
                    <input class="mdui-textfield-input" type="text" placeholder="User Name" v-model="name"  required/>
                </div>
                <div class="mdui-textfield">
                    <input class="mdui-textfield-input" type="password" placeholder="User Password" required />
                    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="login">一键登录</button>
                </div>
            </div>
        </div>
        <MiHeader />
        <MIDrawer />
    </div>
</template>
<script>
import MiHeader from "./components/MI_Header";
import MIDrawer from "./components/MI_Drawer";
import Global from './components/Global';
import LoginPage from './components/LoginPage';

export default {
    name: "App",
    data() {
        return {
            username: "",
            name: ""
        };
    },
    components: {
        MiHeader,
        MIDrawer,
        LoginPage
    },


    methods: {
        login() {
            this.username = this.name;
            this.$root.username =  this.name;
        }
    }
};
</script>
<style scoped>
button {
    margin-top: 30px;
}
</style>