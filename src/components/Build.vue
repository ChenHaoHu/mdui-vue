<template>
  <div class="mdui-container mi_home">
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">任务名称</label>
      <input class="mdui-textfield-input" type="text" maxlength="20" />
    </div>

    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">创建用户名</label>
      <input class="mdui-textfield-input" type="text" maxlength="60" />
    </div>

   
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">任务描述</label>
      <input class="mdui-textfield-input" type="text" maxlength="60" />
    </div>

    
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">任务有效期</label>
      <input class="mdui-textfield-input" type="date" maxlength="60" />
    </div>
  </div>
</template>

<script>
import mdui from "mdui";
export default {
  name: "Build",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.mi_home {
  margin-top: 50px;
}
</style>
