<template>
   <div class="dashboard">
      <TodoList class="todoList"></TodoList>
   </div>
</template>

<script setup>
import TodoList from './components/TodoList.vue'
</script>

<style scoped>
  
   .dashboard {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(165, 202, 188);
   }

  .todoList {
    width: 35rem;
    height: 35rem;
    background-color: #ECE6C2;
  }

  .timerApp {
    width: 35rem;
    height: 10rem;
    background-color: lightgray;
  }

</style>