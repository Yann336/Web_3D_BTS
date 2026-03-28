<script setup>
import { ref, computed } from 'vue';


const title =ref ("");
const completed = ref(false);
const date = ref();
let id = 1
const hide = ref(false)

const todolist = ref([])

const addTodo = () =>{
   todolist.value.push({
    id : id++,
    title: title.value,
    date: date.value,
    completed : completed.value
   })
  title.value = ''
  date.value = ''
  completed.value = false
};

const deleteTodo = (id) =>{
  todolist.value = todolist.value.filter(todo => todo.id !== id)
};

const sortedTodos = computed(() =>{
  let sortedTodos = todolist.value.toSorted((a,b)=> a.completed > b.completed ? 1 : -1)
  if (hide.value){
    sortedTodos = sortedTodos.filter(t => !t.completed );
  }
  return sortedTodos;
})


const remainingTodo = computed(() => {
  return todolist.value.filter(t => t.completed === false).length
}
)

</script>




<template>

<form action="" @submit.prevent="addTodo">
  <input type="text" placeholder="Nom" v-model="title">
  <br>
  <input type="date" placeholder="date" v-model = "date">
  <br>
  <button :disabled="title.length === 0"> Ajouter </button>
</form>



<ul>
  <p v-if="todolist.length === 0"> Ajouter des taches</p>

    <li v-for="todo in sortedTodos"
    :key="todo.id" 
    :class="{barré: todo.completed }" 
    >
    
    <label>
      <input type="checkbox" v-model="todo.completed">
      {{ todo.title }} {{ todo.date }} 

      <button @click="deleteTodo(todo.id)"> Supprimer </button>
    </label>
  </li>
</ul>


<div>
  <label>
    <input type="checkbox" v-model="hide">
    Masquer les taches complétées
  </label>
  <p v-if="remainingTodo > 0">
    {{ remainingTodo }} tâche{{  remainingTodo > 1 ? 's' : '' }} à faire
  </p>
</div>




</template>



<style>
  .barré{
    text-decoration: line-through;
  }
</style>



