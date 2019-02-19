<template>
  <div id="show-recipes">
    <h1>All Recipes</h1>
    <input type="text" v-model="search" placeholder="Search for recipes!"/>
    
    <div v-for="recipe in filteredRecipes" class="single-recipe">
        <router-link v-bind:to="'/recipe/' + recipe.id"><h2>{{ recipe.title | to-uppercase }}</h2></router-link>
        <article> {{ recipe.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      recipes:[],
      search:''
  }
},

methods: {

},
created() {
    this.$http.get('https://vue-firebase-tutorial-f23ea.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var recipesArray = [];
      for (let key in data){
          data[key].id = key
          recipesArray.push(data[key]);
      }
      this.recipes = recipesArray;
    })
  },
  computed: {
    filteredRecipes:function(){
      return this.recipes.filter((recipe) => {
        return recipe.title.match(this.search)
      });
    }
  }
}

</script>

<style scoped>
* {
text-align: left;
}

#show-recipes {
max-width: 1000px;
margin: 0 auto;
}

.single-recipe{
float: left;
height: 250px;
width: 250px;
padding: 20px;
margin: 20px;
background: #eee;
}

input {
width: 100%;
position: relative;
float: left;
width: 100%;
border: 3px solid #black;
padding: 10px;
height: 20px;
border-radius: 5px;
outline: none;
color: #9DBFAF;
}


</style>