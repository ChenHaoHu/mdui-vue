<template>
    <div class="MI_Tasks">
        <div class="mdui-progress" v-if="loading == 0">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <div class="mdui-card" style="width:300px;margin-top:20px" v-for="(item,index) in tasks" :key="index" v-if="loading == 1">
            <div class="mdui-card-primary">
                <div class="mdui-card-primary-title">{{item.title}}</div>
                <div class="mdui-card-primary-subtitle">{{item.author}}</div>
                <div class="mdui-card-primary-subtitle" style="color:red">{{item.end}}</div>
            </div>
            <div class="mdui-card-content">{{item.desc}}</div>
            <div class="mdui-card-actions">
                <router-link :to="{path:'/task',query: {id: item.id,desc : item.desc,time: item.time,author: item.author,title : item.title  }}">
                    <button class="mdui-btn mdui-ripple mdui-color-light-blue-900">查看</button>
                </router-link>
                <button class="mdui-btn mdui-ripple mdui-color-red" mdui-dialog="{target: '#exampleNoTitle'}">删除</button>
                <div class="mdui-dialog" id="exampleNoTitle">
                    <div class="mdui-dialog-content">确定删除？删除不可恢复</div>
                    <div class="mdui-dialog-actions">
                        <button class="mdui-btn mdui-ripple" mdui-dialog-close>cancel</button>
                        <button class="mdui-btn mdui-ripple" mdui-dialog-confirm>ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import urlConfig from '../../config/url.js'
import Global from './Global'
export default {
    name: "Tasks",
    data() {
        return {
            tasks: [],
            loading: 0
        };
    },
    mounted() {

        var that = this;
        axios.get(urlConfig.url.tasks + '?user=' + this.$root.username).then(function(res) {
            console.log(res)

            for (var i = 0; i < res.data.length; i++) {
                that.tasks.push({
                    'id': res.data[i].id,
                    author: res.data[i].author,
                    title: res.data[i].processname,
                    desc: res.data[i].desc,
                    end: res.data[i].time
                });
            }

            that.loading = 1;
        }).catch(function(err) {
            alert("加载失败，请联系管理员");
        })
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