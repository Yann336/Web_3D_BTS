<script setup>
import { ref } from 'vue';

// const count = ref(0)
// const movieName = ref('')
// const movies = ref([
//   'matrix',
//   'lilo',
//   'titanic'
// ])

// const sortMovies = () =>{
//   -movies.value.sort((a,b)=> a>b ? 1 : -1)
// }


// const deleteMovie = (movie) =>{
//   movies.value = movies.value.filter(m => m !== movie)
// }

// const addMovie = () => {
//   movies.value.push(movieName.value)
//   movieName.value = ''

// }

// const increment = () => {
//   count.value++
// }

// const decrement = () => {
//   count.value--
// }

const person = ref({
  firstname : 'Yann',
  lastname: 'Popov',
  age: 20
})

const randomAge = () => {
  person.value.age = Math.round(Math.random()* 100)
}


</script>




<template>
  <!-- <p :id="'p-${count}'"> Coucou {{ count }}</p>
  <button @click="increment"> Incrementer </button>
  <button @click="decrement"> Decrementer </button>
  <hr>
  <button @click="sortMovies">réorganiser</button>

  <form action="" @submit.prevent="addMovie">
    <input type="text" placeholder="nv film" v-model="movieName">
    <button> Ajouter </button>
  </form>

  <ul>
    <li 
    v-for="movie in movies"
    :key="movie"
    >
      {{ movie }} <button @click="deleteMovie(movie)"> suppr </button>
    </li>
  </ul>

  <div v-show="count >= 5"> Vous avez cliqué plus de 5 fois </div> -->

<ul>
  <li>{{person.firstname}}</li>
  <li>{{person.lastname}}</li>
  <li>{{person.age}}</li>
</ul>
<button @click.prevent="randomAge">changer age</button>
</template>







<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
