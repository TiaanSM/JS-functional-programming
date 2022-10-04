<script setup>
    import { ref, onMounted, computed, watch} from 'vue'

    const todos = ref([])
    const name = ref('')

    const input_content = ref([])

    const todos_asc = computed(() => todos.value.sort((a,b) => {
        return b.createdAt - a.createdAt
    }))

    const addTodo = () => {
        if (input_content.value.trim() === '') {
            return
        }

        todos.value.push({
            content: input_content.value,
            done: false,
            createdAt: new Date().getTime()
        })

        input_content.value = ''
    }

    const removeTodo = todo => {
        todos.value = todos.value.filter(t => t !== todo)
    }

    watch(todos, newVal => {
        localStorage.setItem('todos', JSON.stringify(newVal))
    }, { deep: true })

    onMounted(() => {
        todos.value = JSON.parse(localStorage.getItem('todos')) || []
    })
</script>

<template>
    <main class="todoList">
      <section class="main-title">
        <h2 class="title">
           Todo List
        </h2>
      </section>

      <section class="create-todo">
         <h3 class="header">Create a Todo</h3>
         <form @submit.prevent="addTodo">

            <input 
               type="text" 
               placeholder="Today I will..." 
               v-model="input_content"
               class="todo-input"
            />

            <input type="submit" value="Add Todo" class="submit">
         </form>
      </section>

      <section class="list-todo">
        <div class="todo-item">
            <div class="todo-main" v-for="todo in todos_asc" :key="todo" :class="`todo-item ${todo.done && 'done'}`">
                
                <div class="todo-content">
                    <input type="text" v-model="todo.content" />
                </div>

                <div class="action">
                    <button class="delete" @click="removeTodo(todo)">X</button>
                </div> 

            </div> 
        </div>
      </section>

    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');

   .todoList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Fugaz One', cursive;
    border: 2px solid black;
    position: relative;
   }

   .main-title {
    width: 100%;
    height: 3rem;
    text-align: center;
    position: absolute;
    top: 0px;
   }

   .title {
    color: #6F5643;
    font-size: 2rem;
    border-bottom: 2px solid black;
   }

   .create-todo {
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 3.3rem;
    border-bottom: 2px solid black;
   }

   .header {
    width: 100%;
    height: 2rem;
    color: #6F5643;
    text-align: center;
    font-size: 1.5rem;
    position: absolute;
    top: 0.5rem;
   }

   form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
   }

   .todo-input {
    background-color: #d2a24c;
    width: 20rem;
    height: 3rem;
    padding: 1rem 2rem;
    border: 2px solid black;
    font-size: 1.3rem;
    position: absolute;
    top: 4rem;
   }

   .todo-input::placeholder {
    color: #6f5643;
   }

   .submit {
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: #73bda8;
    background-color: #6F5643;
    position: absolute;
    top: 8rem;
    font-size: 1.2rem;
   }

   .list-todo {
    width: 100%;
    height: 10rem;
    position: relative;
    bottom: 2.5rem;
   }

   .todo-item {
    width: 100%;
    height: auto;
   }

   .todo-content > input {
    width: 30rem;
    height: 3rem;
    padding: 1rem;
    font-size: 1.3rem;
    background-color: #d2a24c;
   }

   .todo-main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0rem;
   }

   .delete {
    width: 3rem;
    height: 3rem;
    color: #73bda8;
    background-color: #6f5643;
    font-size: 1.5rem;
    cursor: pointer;
   }

</style>