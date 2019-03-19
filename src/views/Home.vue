<template>
  <div class="home">
    <addRecipes/>
  </div>
</template>

<script>
  // @ is an alias to /src
import firebase from 'firebase';
import BoardList from '@/components/BoardList.vue'

export default {
  name: 'BoardList',
  components: {
    BoardList
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

