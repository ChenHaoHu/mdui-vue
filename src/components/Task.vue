<template>
  <div class="mdui-container mi_home" >
  <div class="mdui-panel" mdui-panel>
  
  <div class="mdui-panel-item" mdui-panel-item-toggle>
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Trip name</div>
      <div class="mdui-panel-item-summary">Carribean cruise</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>First contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst contentFirst content</p>
   
    </div>
  </div>
  

  
</div>
  </div>
</template>

<script>

import mdui from 'mdui';
export default {
  name: 'Task',
  data () {
    return {
    }
  },
  mounted(){
    var inst = new mdui.Panel(selector, options);
 

  }
}
</script>

<style scoped>
.mi_home{
  margin-top: 50px
}
</style>
