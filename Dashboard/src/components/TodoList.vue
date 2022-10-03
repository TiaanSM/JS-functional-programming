<template>
    <main class="app">

      <section>
        <h2 class="title">
           Todo List
        </h2>
      </section>

      <section class="create-todo">
         <h3>Create a todo</h3>
         <form @submit.prevent="addTodo">

            <h4>Whats on your todo list?</h4>
            <input 
               type="text" 
               placeholder="e.g. make a video" 
               v-model="input_content"
            />

            <input type="submit" value="Add todo">
         </form>
      </section>

      <section class="todo-list">
        <h3>TODO LIST</h3>
        <div class="list">
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