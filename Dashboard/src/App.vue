<template>
   <h1 @click="handleHeadingClick">My name is {{ name }} ,im {{ age }} years old</h1>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Rick')
const age = ref(21)

const handleHeadingClick = () => {
  name.value = 'Stefan'
  age.value = 31
}
</script>

<!--
<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Tiaan')
    const age = ref(21)

    return {
      name,
      age
    }
  }
}
</script>
-->