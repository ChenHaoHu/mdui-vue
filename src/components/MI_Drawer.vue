<template>
  <div>
    <div class="mdui-drawer" id="drawer">
      <ul class="mdui-list">
        <router-link to="/home">
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">near_me</i>
            <div class="mdui-list-item-content">概览</div>
          </li>
        </router-link>
        <router-link to="/tasks">
          <li class="mdui-list-item mdui-ripple">
            <i
              class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-brown"
            >view_carousel</i>
            <div class="mdui-list-item-content">任务</div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MI_Drawer",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
