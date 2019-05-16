<template>
  <section class="container">
    <div>
      <logo/>
      <calculator/>
      <counter/>
      <h1 class="title">nuxt-app-test</h1>
      <span>{{ $store.state.counter }}</span>
      <button class="button-success" @click="$store.commit('increment')">+ 1</button>
      <button class="button-danger" @click="$store.commit('resetData')">Reset</button>
      <span>{{ $store.state.api.data }}</span>
      <input type="text" v-model="test">
      <button class="button-success" @click="plus()">plus</button>
      <button class="button-danger" @click="minus()">minus</button>
      <span>Data : {{ test2 }}</span>
      <button class="button-success" @click="toogleDataType()">toogle</button>
      <button class="button-danger" @click="getDataType()">testing</button>
      <h2 class="subtitle">My pioneering Nuxt.js project test</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Calculator from '~/components/Calculator'
import Counter from '~/components/Counter'

export default {
  data() {
    return {
      test: 0,
      test2: '10'
    }
  },
  components: {
    Logo,
    Calculator,
    Counter
  },
  methods: {
    plus() {
      if (isNaN(this.test)) {
        this.test = 0
      }
      this.test++
    },
    minus() {
      if (isNaN(this.test)) {
        this.test = 0
      }
      this.test--
    },
    getDataType() {
      alert('Type : ' + typeof this.test2)
    },
    toogleDataType() {
      this.test2 =
        typeof this.test2 == 'number' ? this.test2.toString() : -this.test2
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('api/GET_DATA')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button-danger {
  border: none;
  background-color: #ff7070;
  color: white;
  min-width: 50px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 4px #999;
}

.button-success {
  border: none;
  background-color: #40cc4c;
  color: white;
  min-width: 50px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 4px #999;
}

.button-success:active,
.button-danger:active {
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}

.button-danger:hover {
  background-color: #f86060;
}

.button-success:hover {
  background-color: #35f045;
}
</style>
