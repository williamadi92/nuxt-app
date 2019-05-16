<template>
  <div>
    <h2>Calculator</h2>
    <input type="number" v-model="number1">
    <input type="number" v-model="number2">
    <button type="button" @click="plus">Plus</button>
    <button type="button" @click="minus">Minus</button>
    <button type="button" @click="multiple">Multiple</button>
    <button type="button" @click="divide">Divide</button>
    <br>
    <br>
    <b>Result : {{ result }}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      result: 0
    }
  },
  methods: {
    plus() {
      this.result = parseInt(this.number1) + parseInt(this.number2)
    },
    minus() {
      this.result = parseInt(this.number1) - parseInt(this.number2)
    },
    multiple() {
      this.result = parseInt(this.number1) * parseInt(this.number2)
    },
    divide() {
      this.result = parseInt(this.number1) / parseInt(this.number2)
    }
  }
}
</script>
