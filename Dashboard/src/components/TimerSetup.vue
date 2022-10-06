<script setup>
import { ref } from 'vue'

let minutes = ref(0)
let seconds = ref(0)

const sendTime = () => {
   this.$emit('set-time', {minutes:this.minutes, secondes:this.secondes})
}

</script>

<template>
    <form class="timerSetup">
		 <label for="min">Minutes<br />
		 <input type="number" v-model="minutes" name="time_m" id="min" min="0" max="59">
		 </label>
		 <label for="sec">Secondes<br />
			  <input type="number" v-model="secondes" name="time_s" id="sec" max="59" min="0">
		 </label>
		 <button type="button" @click="sendTime">Set time</button>
	</form>
</template>
