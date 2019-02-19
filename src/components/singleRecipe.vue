<template>
<div id="single-recipe">
  <h1>{{ recipe.title }}</h1>
  <article> {{ recipe.content }}</article>
  <p>Author: {{recipe.author }} </p>
  <p>Categories</p>
  <ul>
   <li v-for="category in recipe.categories">{{ category }}</li>
  </ul>
</div>

</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      recipe:{}
    }
  },
  created(){
    this.$http.get('https://vue-firebase-tutorial-f23ea.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.recipe = data;
    })
  }
}

</script>

<style>

  #single-recipe {
    max-width: 960px;
    margin: 0 auto;
    text-align: left;
  }

</style>