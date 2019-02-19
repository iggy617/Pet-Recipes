<template>
  <div id="add-recipe">
    <h2>Add a New Recipe suggestion</h2>
  <form v-if="!submitted">
    <label>Recipe Name:</label>
    <input type="text" v-model.lazy="recipe.title" required />
    <label>Recipe Content:</label>
    <textarea v-model.lazy="recipe.content"></textarea>
    <div id="checkboxes">
      <label>Cats</label>
         <input type="checkbox" value="cats" v-model="recipe.categories"/>
      <label>Dogs</label>
         <input type="checkbox" value="dogs" v-model="recipe.categories"/>
      <label>Lizards</label>
         <input type="checkbox" value="lizards" v-model="recipe.categories"/>
    </div>
    <label>Author:</label>
    <select v-model="recipe.author">
      <option v-for="author in authors">{{ author }}</option>
    </select>
    
    <button v-on:click.prevent="post">Add Recipe!</button>
    
  </form>
<div v-if="submitted">
  <h3>Thanks for adding your recipe!</h3>
</div>
<div id="preview">
  <h3>Preview Recipe Post</h3>
  <p>Recipe Name: {{ recipe.title }}</p>
  <p>Recipe Content:</p>
  <p>{{ recipe.content }}</p>
  <p>Recipe Categories:</p>
  <ul>
    <li v-for="category in recipe.categories">{{ category }}</li>
  </ul>
  <p>Author: {{ recipe.author }}</p>
</div>
</div>

</template>


<script>
  
export default {
  name: 'addRecipes',
  data () {
    return {
      recipe:{
      title: '',
      content: '',
      categories: [],
      author: ''
    },
      authors: ['Luigi', 'Jozef', 'Natalia'],
      submitted: false,
    }
  },
  methods: {
    post: function(){
      this.$http.post('https://vue-firebase-tutorial-f23ea.firebaseio.com/posts.json', this.recipe).then(function(data){
        console.log(data);
        this.submitted = true;
      });
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

#add-recipe *{
box-sizing:border-box;
}

#add-recipe{
text-align: left;
margin:20px auto;
max-width: 500px;
}

label{
display: block;
margin:20px 0 10px;
}

input[type="text"],textarea{
display:block;
width:100%;
padding:8px;
}
#preview{
padding:10px 20px;
border:1px dotted #ccc;
margin:30px 0;
}
h3{
margin-top: 10px;
}

#checkboxes input {
display: inline-block;
margin-right:10px;

}

#checkboxes label {
display: inline-block;
}
</style>
