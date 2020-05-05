import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)
const Home=()=>import('views/home/Home');
const Category=()=>import('views/category/Category');
const Cart=()=>import('views/cart/Cart');
const Profile=()=>import('views/profile/Profile');
const Detail=()=>import('views/detail/Detail');
  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      name:'Home'
    },
    {
      path:'/category',
      component:Category,
      name:'Category'
    },
    {
      path:'/cart',
      component:Cart,
      name:'Cart'
    },
    {
      path:'/profile',
      component:Profile,
      name:'Profile'
    },
    {
      path:'/detail/:id',
      component:Detail,
      name:'Detail'
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
