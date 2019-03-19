<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.svg">
    <nav>
      <ul>
  <li><router-link to="/home">Home</router-link></li>
  <li><router-link to="/add-board">Add A New Recipe</router-link></li>
  <li><button @click="logout">Logout</button></li>
      </ul>  
</nav>

        <router-view/>
  </div>
</template>


<script>
  // @ is an alias to /src
import firebase from 'firebase';

export default {
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>


<style scoped>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
text-align: center;
}

#nav {
padding: 30px;
}

#nav a {
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active {
color: #42b983;
}

img {
width: 25%;
height: 25%;
}

ul{
list-style-type:none;
text-align:center;
margin: 0;
}

li{
display:inline-block;
margin:0 10px;
}

a{
color:#fff;
text-decoration: none;
padding: 6px 8px;
border-radius:10px;
}

nav{
background: #444;
padding:14px 0;
margin-bottom: 40px;
}

</style>
