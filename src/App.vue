<template>
  <div
    id="app"
    class="mdui-drawer-body-left mdui-appbar-with-toolbar mdui-theme-primary-indigo mdui-theme-accent-pink mdui-loaded"
  >
    <router-view />
    <MiHeader />
    <MIDrawer />
  </div>
</template>

<script>
import MiHeader from "./components/MI_Header";
import MIDrawer from "./components/MI_Drawer";



export default {
  name: "App",
  components: {
    MiHeader,
    MIDrawer
  },
  mounted() {
  
  }
};
</script>

<style>

</style>
