<template>
  <div class="MI_Tasks">
      <div class="mdui-card" style="width:300px;margin-top:20px"  v-for="(item,index) in tasks" :key="index">
        <div class="mdui-card-primary">
          <div class="mdui-card-primary-title">{{item.title}}</div>
          <div class="mdui-card-primary-subtitle">{{item.author}}</div>
          <div class="mdui-card-primary-subtitle" style="color:red">{{item.end}}</div>
        </div>
        <div class="mdui-card-content">{{item.desc}}</div>
        <div class="mdui-card-actions">
          <button class="mdui-btn mdui-ripple mdui-color-light-blue-900" >查看</button>
          <button class="mdui-btn mdui-ripple mdui-color-red">删除</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
      tasks: [
        {
          id: 1000,
          author: "hcy",
          title: "班级投票",
          desc: "班级投票的相关描述",
          end: "2019-09-10 09:00"
        },
        {
          id: 1000,
          author: "hcy",
          title: "班级投票",
          desc: "班级投票的相关描述",
          end: "2019-09-10 09:00"
        },
        {
          id: 1000,
          author: "hcy",
          title: "班级投票",
          desc: "班级投票的相关描述",
          end: "2019-09-10 09:00"
        },
        {
          id: 1000,
          author: "hcy",
          title: "班级投票",
          desc: "班级投票的相关描述",
          end: "2019-09-10 09:00"
        },
        {
          id: 1000,
          author: "hcy",
          title: "班级投票",
          desc: "班级投票的相关描述",
          end: "2019-09-10 09:00"
        },
        {
          id: 1000,
          author: "hcy",
          title: "班级投票",
          desc: "班级投票的相关描述",
          end: "2019-09-10 09:00"
        }
      ]
    };
  }
};
</script>

<style scoped>
.MI_Tasks {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
