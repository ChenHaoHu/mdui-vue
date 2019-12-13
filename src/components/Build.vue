<template>
    <div class="mdui-container mi_home">
        <div class="mdui-progress" v-if="loading == 0">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <div>
            <h1 class="doc-title mdui-text-color-theme">创建任务</h1>
            <div class="mdui-textfield">
                <label class="mdui-textfield-label">任务名称</label>
                <input class="mdui-textfield-input" type="text" maxlength="20" v-model="name" />
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">请假原因</label>
                <input class="mdui-textfield-input" type="text" maxlength="60" v-model="desc" />
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">一级审批人选择(并行,有一半人选择通过即可，中间空格隔开)</label>
                <input class="mdui-textfield-input" type="text" maxlength="60" v-model="level1" />
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">二级审批人选择(串行,有一半人选择通过即可，中间空格隔开)</label>
                <input class="mdui-textfield-input" type="text" maxlength="60" v-model="level2" />
            </div>
            <br><br>
            <button class="mdui-btn mdui-color-theme-accent mdui-ripple" @click="build">BUILD</button>
            <br><br>
        </div>
    </div>
</template>
<script>
import mdui from "mdui";
import axios from 'axios'
import urlConfig from '../../config/url.js'
import Global from './Global'
export default {
    name: "Build",
    data() {
        return {
            name: "",
            desc: "",
            level1: "",
            level2: "",
            author: this.$root.username,
            loading: 1
        };
    },
    methods: {
        build: function() {
            var that = this;
            that.loading = 0;
            axios.get(urlConfig.url.build + '?deploy=myProcess&name=' + that.name + '&desc=' + that.desc + '&level1=' + that.level1 + '&level2=' + that.level2 + '&author=' + that.author).then(function(res) {
                alert("创建成功，流程已经上线");
                that.loading = 1;
               // window.location.href='/mytask';
            }).catch(function(err) {
                alert("创建失败，请联系管理员");
            })
        }


    }
};
</script>
<style scoped>
.mi_home {
    margin-top: 50px;
}
</style>