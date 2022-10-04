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
      <section class="title-1">
        <h2 class="title">
           Todo List
        </h2>
      </section>

      <section class="create-todo">
         <h3 class="header">Create a todo</h3>
         <form @submit.prevent="addTodo">

            <input 
               type="text" 
               placeholder="Today I will..." 
               v-model="input_content"
               class="todo-input"
            />

            <input type="submit" value="Add todo" class="submit">
         </form>
      </section>

      <section class="todo-list">
        <h3>TODO LIST</h3>
        <div class="todo-item">
            <div v-for="todo in todos_asc" :key="todo" :class="`todo-item ${todo.done && 'done'}`">

                <label>
                    <input type="checkbox" v-model="todo.done" />
                </label>
                
                <div class="todo-content">
                    <input type="text" v-model="todo.content" />
                </div>

                <div class="action">
                    <button class="delete" @click="removeTodo(todo)">Delete</button>
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

   .title-1 {
    width: 100%;
    height: auto;
    text-align: center;
    position: absolute;
    top: 0px;
   }

   .title {
    color: #6F5643;
    font-size: 2rem;
    border-bottom: 2px solid black;
   }

   .header {
    width: 34.75rem;
    height: auto;
    color: #6F5643;
    text-align: center;
    position: absolute;
    top: 53px;
    left: 0px;
    font-size: 1.5rem;
   }

   .create-todo {
    
   }

   form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
   }

   .todo-input {
    background-color: #d2a24c;
    /*border: 3px solid #73bda8;*/
    width: 20rem;
    height: 3rem;
    padding: 1rem 2rem;
    border: 2px solid black;
    position: absolute;
    top: 6rem;
   }

   .todo-input::placeholder {
    color: #6f5643;
   }

   .submit {
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: #d2a24c;
    background-color: #6F5643;
    position: absolute;
    top: 10rem;
   }

   .todo-list {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   }

   .todo-item {
    background-color: lightgray;
    width: 100%;
    height: auto;
    display: flex;
   }

   
</style>