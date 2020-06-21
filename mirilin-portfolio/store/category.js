export const state = () => ({
  category: 'all'
})

export const mutations = {
  setCategory(state, category) {
    state.category = category
  }
}

export const getters = {
  geCategory: (state) => {
    return state.category
  }
}
