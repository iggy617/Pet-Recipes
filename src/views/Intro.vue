<template>
 <div id="pictures">

  
  <a href="/Cat_Page01/Cat_Page01.html">
    <img src="./imgs/Cat.jpg" id="cat" class='fade'>
  </a>
  
  <a href="/Dog_Page01/Dog_Page01.html">
    <img src="./imgs/Dog.jpg" id="dog" class='fade'>
  </a>
   <div id="direction">
    <p>
      Choose one of the two to browse recipies for your pet. <br><br>
      These recipies are specifically chosen for your pet, and assure quality choices aswell as a healthy food choices for your loved one.
    </p>
  </div>

</div>
</template>

<style>
  
  #pictures {
    text-align: center;
    margin: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
#cat {
  width: auto;
  height: 800px;
  display:inline-block;
  opacity: 0.6;
  margin: 5px;
}

#dog {
  width: auto;
  height: 800px;
  display:inline-block;
  opacity: 0.6;
  margin: 5px;
}

#LOGO {
  width: auto;
  height: 250px;
}

#direction {
  width: 230px;
  height: 150px;
  position: absolute;
  top: 350px;
  left: 40px;
}
  
@keyframes icon-move {
 0% {opacity: 0.6;}
 100% {opacity: 1;}
}
.fade:hover {
 -webkit-animation-name: icon-move;
 animation-duration: 2s;
}

</style>

