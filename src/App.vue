<script setup>
import { ref } from 'vue';

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

</script>




<template>
  <p :id="'p-${count}'"> Coucou {{ count }}</p>
  <button @click="increment"> Incrementer </button>
  <button @click="decrement"> Decrementer </button>

  <div v-show="count >= 5"> Vous avez cliqué plus de 5 fois </div>

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
