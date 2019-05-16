export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  resetData(state) {
    state.counter = 0
  }
}
