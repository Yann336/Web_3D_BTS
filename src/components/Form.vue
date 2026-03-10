<template>
    <form @submit.prevent="addTechno">
        <label for="techno">Techno à ajouter</label>
        <br>
        <input type="text" name="techno" v_model="techToLearn">
        <br>
        <button type="submit" @click="addTechno">ajouter</button>
    </form>
</template>

<script setup>
import {ref} from 'vue'

let technToLearn = "";

const addTechno = function(){
    console.log("Form addTechno() techToLearn", technToLearn)
}
 

</script>

<style>

</style>