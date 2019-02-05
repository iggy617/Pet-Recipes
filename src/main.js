import VueFire from 'vuefire';
import Vue from 'vue';
import firebase from 'firebase';
import 'firebase/firestore';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';

Vue.use(VueFire)
firebase.initializeApp({
    apiKey: "AIzaSyCpBSoUVO98nNO4GMKOwJJ6AXIOhfnjHz0",
    authDomain: "vue-firebase-tutorial-f23ea.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-f23ea.firebaseio.com",
    projectId: "vue-firebase-tutorial-f23ea",
    storageBucket: "vue-firebase-tutorial-f23ea.appspot.com",
    messagingSenderId: "1028610154256"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

export const db = firebase.firestore()