import Vue from 'vue';
import VueRouter from 'vue-router';
const NotAuthorized = () => import('../views/NotAuthorized');
const MainScreen = () => import('../views/MainScreen');
const MainScreenList = () => import('../components/MainScreen/MainScreenList');
const MainScreenRefillBalance = () => import('../components/MainScreen/MainScreenRefillBalance');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authorization',
    component: NotAuthorized
  },
  {
    path: '/list',
    component: MainScreen,
    children: [
      {
        path: '',
        component: MainScreenList,
        name: 'list',
        
      },
      {
        path: 'refill',
        component: MainScreenRefillBalance,
        name: 'RefillBalance',
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
