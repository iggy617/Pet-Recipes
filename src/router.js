import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Recipes from '@/views/Recipes.vue';

import showRecipes from '@/components/showRecipes.vue';
import addRecipes from '@/components/addRecipes.vue'
import singleRecipes from '@/components/singleRecipe.vue';

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
      path: '/recipe/:id',
      name: 'singlerecipe',
      component: singleRecipes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addrecipe',
      name: 'addrecipe',
      component: addRecipes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'recipes',
      component: Recipes,
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


