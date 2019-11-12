<template>
  <div>
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <span
          id="toggle"
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-drawer="{target: '#main-drawer', swipe: true}"
        >
          <i class="mdui-icon material-icons">menu</i>
        </span>
        <a href="../" class="mdui-typo-headline mdui-hidden-xs">MDUI</a>
        <a href="./" class="mdui-typo-title">文档</a>
        <div class="mdui-toolbar-spacer"></div>
        <span
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-dialog="{target: '#dialog-docs-theme'}"
          mdui-tooltip="{content: '设置主题'}"
        >
          <i class="mdui-icon material-icons">color_lens</i>
        </span>
        <a
          href="https://github.com/zdhxiong/mdui"
          target="_blank"
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-tooltip="{content: '查看 Github'}"
        ></a>
      </div>
    </header>
    <div class="mdui-fab-wrapper" id="fab">
      <button class="mdui-fab mdui-ripple mdui-color-pink-accent">
        <i class="mdui-icon material-icons">add</i>
        <i class="mdui-icon mdui-fab-opened material-icons">mode_edit</i>
      </button>
      <div class="mdui-fab-dial">
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-pink">
          <i class="mdui-icon material-icons">assignment</i>
        </button>
      </div>
    </div>
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
    document.getElementById("fab").addEventListener("click", function() {
      inst2.toggle();
    });
  }
};
</script>

<style scoped>
</style>
