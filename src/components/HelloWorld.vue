<template>
  <div class="hello">
    <article v-for="(Recipes, idx) in Recipes" :key="idx">
      <img :src="Recipes.images">
      <h1>{{ Recipes.name }}</h1>  
      <button @click="deleteRecipe(Recipes.id)">
      Delete
      </button> 
    </article>
  
    <hr>
    
    <form @submit="addRecipe(name, images)">
      <input v-model="name" placeholder="Recipe Name">
      <br>
      <input v-model="images" placeholder="Recipe Image">
      <br>
      <button type="submit">Add Recipe</button>
    </form>
    
  </div>
</template>

<script>
import { db } from '../main'  
  
export default {
  name: 'HelloWorld',
  data () {
    return {
      Recipes: [],
      name: '',      
      images: ''
    }
  },
  firestore () {
    return {
      Recipes: db.collection('Recipes').orderBy('createdAt')
    }
  },
  methods: { 
    addRecipe (name, images) {      
      const createdAt = new Date()
      db.collection('Recipes').add({ name, images, createdAt })
      this.name = ''
      this.images = ''
    },
    deleteRecipe (id) {
      db.collection('Recipes').doc(id).delete()
    }
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input, button {
  margin-bottom: 10px;
}
</style>
