<template>
  <div class="mdui-container mi_task" >
       <div class="mdui-panel" mdui-panel mdui-panel-item-taggle>
      <div class="mdui-panel-item" mdui-panel-item-toggle>
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title">{{task.time}}</div>
          <div class="mdui-panel-item-summary">{{task.title}}</div>
          <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <div class="mdui-panel-item-body">
          {{task.desc}}
        </div>
      </div>
    </div>
    <div class="mdui-table-fluid">
  <table class="mdui-table">
    <thead>
      <tr>
        <th>#</th>
        <th>名称</th>
        <th>上传时间</th>
         <th>文件格式</th>
        <th>操作1</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in files" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>@{{item.type}}</td>
         <td><a href="">查看</a></td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
</template>

<script>

import mdui from 'mdui';
export default {
  name: 'Task',
  data () {
    return {
      task:{
        title:"任务名",
         author:"秋名山白又白",
         time:"2019-08-01 12:00",
         desc:"dsadsadsadas"
      },
      files:[
        {
          name:"name",
          time:"2019-08-01 12:00",
          type:"jpg",
        }, {
          name:"name",
          time:"2019-08-01 12:00",
          type:"jpg",
        }, {
          name:"name",
          time:"2019-08-01 12:00",
          type:"jpg",
        }, {
          name:"name",
          time:"2019-08-01 12:00",
          type:"jpg",
        }, {
          name:"name",
          time:"2019-08-01 12:00",
          type:"jpg",
        }
      ]
    }
  },
  mounted(){
    var inst = new mdui.Panel(selector, options);
 

  }
}
</script>

<style scoped>
.mi_task{
  margin-top: 50px
}
.mdui-panel{
  margin-bottom: 20px;
}
</style>
