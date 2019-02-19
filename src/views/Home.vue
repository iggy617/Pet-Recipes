<template>
  <div class="home">
    <addRecipes/>
  </div>
</template>

<script>
  // @ is an alias to /src
import firebase from 'firebase';
import addRecipes from '@/components/addRecipes.vue'

export default {
  name: 'addRecipes',
  components: {
    addRecipes
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

