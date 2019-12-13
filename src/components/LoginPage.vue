<template>
    <div class="mdui-container mi_home">
        <h1 class="doc-title mdui-text-color-theme">欢迎进入OA审批流平台</h1>
        <div class="mdui-textfield">
            <input class="mdui-textfield-input" type="text" placeholder="User Name" v-model="name" />
        </div>
        <div class="mdui-textfield">
            <input class="mdui-textfield-input" type="password" placeholder="User Password" />
            <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="login">一键登录</button>
        </div>
    </div>
</template>
<script>
import Global from './Global';
export default {
    name: "LoginPage",
    data() {
        return {
            name: ""
        };
    },
    mounted() {},
    methods: {
        login() {
           this.$root.username = name;
        }
    }
};
</script>
<style scoped>
.mi_home {
    margin-top: 50px;
}

button {
    margin-top: 30px;
}
</style>