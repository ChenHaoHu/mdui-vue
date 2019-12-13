import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Task from '@/components/Task'
import Build from '@/components/Build'
import MyTask from '@/components/MyTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/build',
      name: 'Build',
      component: Build
    },
     {
      path: '/mytask',
      name: 'MyTask',
      component: MyTask
    }
  ]
})
