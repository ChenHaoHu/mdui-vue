<template>
  <div class="mdui-container mi_home">
 	<div class="mdui-container doc-container doc-no-cover">
  <h1 class="doc-title mdui-text-color-theme">欢迎进入OA审批流平台</h1>
  <div class="doc-intro mdui-typo">
    <p>这是一个OA审批流的展现平台，并不是一个OA平台</p>
    <div class="doc-intro-module">
      <h3>团队成员</h3>
     <div class="mdui-table-fluid">
  <table class="mdui-table">
    <thead>
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>职务</th>
        <th>任务</th>
      </tr>
    </thead>
    <tbody>
        <tr  v-for="(item,index) in  rememebers">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.title}}</td>
        <td>{{item.task}}</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    <div class="doc-intro-module">
      <h3>相关技术</h3>
      <p><a href="https://www.mdui.org/" target="_blank">Material Design UI设计</a></p>
       <p><a href="https://www.activiti.org/" target="_blank">activiti审批流框架</a></p>
    </div>
  </div>
    </div>
      </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      rememebers:[
      {
        name:"胡晨阳",
          title:"后端研发",
            task:"架构设计，数据库设计，审批流封装"
      }, {
        name:"焦京",
          title:"后端研发",
            task:"数据库设计，业务逻辑编写"
      }, {
        name:"陈宇宏",
          title:"测试，后端研发",
            task:"业务模块整合，审批流测试"
      }, {
        name:"林宇",
          title:"前端研发，测试",
            task:"前端页面编写，前端测试"
      }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped>
.mi_home {
  margin-top: 50px;
}
</style>
