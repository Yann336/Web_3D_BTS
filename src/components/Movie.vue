<script setup>
import { ref } from 'vue';

const count = ref(0);
const movieName = ref('');
const movies = ref([
  'matrix',
  'lilo',
  'titanic',
]);

const sortMovies = () => {
  movies.value.sort((a, b) => (a > b ? 1 : -1));
};

const deleteMovie = (movie) => {
  movies.value = movies.value.filter((m) => m !== movie);
};

const addMovie = () => {
  movies.value.push(movieName.value);
  movieName.value = '';
};

const increment = () => {
  count.value += 1;
};

const decrement = () => {
  count.value -= 1;
};

const person = ref({
  firstname: 'Yann',
  lastname: 'Popov',
  age: 20,
});

const randomAge = () => {
  person.value.age = Math.round(Math.random() * 100);
};

</script>

<template>
  <p :id="'p-${count}'">
    Coucou {{ count }}
  </p>
  <button @click="increment">
    Incrementer
  </button>
  <button @click="decrement">
    Decrementer
  </button>
  <hr>
  <button @click="sortMovies">
    réorganiser
  </button>

  <form
    action=""
    @submit.prevent="addMovie"
  >
    <input
      v-model="movieName"
      type="text"
      placeholder="nv film"
    >
    <button> Ajouter </button>
  </form>

  <ul>
    <li
      v-for="movie in movies"
      :key="movie"
    >
      {{ movie }} <button @click="deleteMovie(movie)">
        suppr
      </button>
    </li>
  </ul>

  <div v-show="count >= 5">
    Vous avez cliqué plus de 5 fois
  </div>

  <ul>
    <li>{{ person.firstname }}</li>
    <li>{{ person.lastname }}</li>
    <li>{{ person.age }}</li>
  </ul>
  <button @click.prevent="randomAge">
    changer age
  </button>
</template>
