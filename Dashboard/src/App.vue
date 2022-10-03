<template>
   <div class="dashboard">
      <TodoList class="todoList"></TodoList>
      <TimerApp></TimerApp>
   </div>
</template>

<script setup>
import TodoList from './components/TodoList.vue'
import TimerApp from './components/TimerApp.vue'

</script>

<style scoped>
  
  .todoList {
    width: 35rem;
    height: 25rem;
    background-color: #333;
  }

</style>