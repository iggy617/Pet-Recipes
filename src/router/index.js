
import * as firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'

import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Intro from '@/views/Intro.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',           //redirect every path that does not exist to the Login view. 
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: BoardList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'BoardList',
      component: BoardList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-board',
      name: 'AddBoard',
      component: AddBoard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
