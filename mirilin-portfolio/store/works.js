import works from '@/assets/json/works.json'

export const state = () => ({
  works
})

export const getters = {
  getWorks: (state) => {
    return state.works
  }
}
