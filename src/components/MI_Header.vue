<template>
    <div>
        <header class="mdui-appbar mdui-appbar-fixed">
            <div class="mdui-toolbar mdui-color-theme">
                <span id="toggle" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-drawer="{target: '#main-drawer', swipe: true}">
                    <i class="mdui-icon material-icons">menu</i>
                </span>
                <a href="../" class="mdui-typo-headline mdui-hidden-xs">OA审批流</a>
                <a href="./" class="mdui-typo-title">欢迎 {{  this.$root.username}}</a>
                <div class="mdui-toolbar-spacer"></div>
                <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: 'LOGIN OUT'}" @click="loginout">
                    <i class="mdui-icon material-icons">&#xe8c6;</i>
                </span>
            </div>
        </header>
        <!-- <div class="mdui-fab-wrapper" id="fab">
      <button class="mdui-fab mdui-ripple mdui-color-pink-accent">
        <i class="mdui-icon material-icons">add</i>
        <i class="mdui-icon mdui-fab-opened material-icons">mode_edit</i>
      </button>
      <div class="mdui-fab-dial">
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-pink">
          <i class="mdui-icon material-icons">assignment</i>
        </button>
      </div>
    </div> -->
    </div>
</template>
<script>
import mdui from "mdui";
export default {
    name: "MI_Header",
    data() {
        return {};
    },
    mounted() {
        var inst2 = new mdui.Fab("#fab");
        var inst1 = new mdui.Drawer("#drawer");
        document.getElementById("toggle").addEventListener("click", function() {
            inst1.toggle();
        });
        // document.getElementById("fab").addEventListener("click", function() {
        //   inst2.toggle();
        // });
    },
    methods: {
        loginout() {
            window.location.reload();
        }
    }
};
</script>
<style scoped>
</style>