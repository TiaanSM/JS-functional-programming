<template>
   <div class="dashboard">
      <TodoList></TodoList>
   </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'

</script>

<style scoped>
  
  .Todo-List {
    width: 35rem;
    height: 25rem;
    background-color: #333;
  }

</style>