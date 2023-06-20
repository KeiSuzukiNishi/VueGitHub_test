import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IssueList from '../views/IssueList.vue'
import TodoList from '../views/TodoList.vue'
import TodoIssues from '../views/TodoIssues.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todos-issues',
    name: 'TodoIssues',
    component: TodoIssues
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
