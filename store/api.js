import axios from 'axios'

export const state = () => ({
  data: null
})

export const mutations = {
  SET_DATA(state, data) {
    state.data = data
  }
}

export const actions = {
  async GET_DATA({ commit }) {
    try {
      const { data } = await axios.get(
        'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'
      )
      commit('SET_DATA', data.title)
    } catch (err) {
      console.error(err)
      commit('SET_DATA', null)
    }
  }
}
