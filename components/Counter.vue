<template>
  <div>
    <div>counter: {{counter}}</div>
    <button class="increment-btn" @click="counter++">Increment</button>
    <button class="decrement-btn" @click="counter--">Decrement</button>
    <button class="reset-btn" @click="counter = 0">Reset</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0
  })
}
</script>
