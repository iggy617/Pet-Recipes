<template>
  <div class="recipes">
        <button @click="logout">Logout</button>
    <showRecipes/>
  </div>
</template>

<script>
  // @ is an alias to /src
import firebase from 'firebase';
import showRecipes from '@/components/showRecipes.vue'

export default {
  name: 'showrecipes',
  components: {
    showRecipes,
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

