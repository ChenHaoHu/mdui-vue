<template>
    <div class="mdui-container mi_task">
                     <div class="mdui-progress" v-if="loading == 0">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <div class="mdui-container doc-container doc-no-cover">
            <h1 class="doc-title mdui-text-color-theme">{{task.title}}</h1>
            <div class="doc-intro mdui-typo">
                <p>{{task.title}}</p>
                <div class="doc-intro-module">
                    <h3>{{task.desc}}</h3>
                    <div class="mdui-table-fluid">
                    </div>
                </div>
            </div>
            <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="pass">通过</button>
            <button class="mdui-btn mdui-color-theme-accent mdui-ripple">不通过</button>
        </div>
    </div>
</template>
<script>
import mdui from 'mdui';
import axios from 'axios'
import urlConfig from '../../config/url.js'
import Global from './Global'
export default {
    name: 'Task',
    data() {
        return {
            task: {
                title: "请假任务",
                author: "秋名山白又白",
                time: "2019-08-01 12:00",
                desc: "由于身体不舒服想请假"
            },
            loading:1
        }
    },
    mounted() {
     
        this.task = this.$route.query
    },
    methods: {
        pass() {
            var that = this;
            that.loading = 0;
            axios.get(urlConfig.url.pass + '?taskid=' + that.task.id).then(function(res) {
                alert("审核成功，流程已经进入下一步");
                window.history.go(-1);
                       that.loading = 1;
            }).catch(function(err) {
                alert("审核失败，请联系管理员");
            })
        }
    }
}
</script>
<style scoped>
.mi_task {
    margin-top: 50px
}

.mdui-panel {
    margin-bottom: 20px;
}
</style>