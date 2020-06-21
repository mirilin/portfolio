import works from '@/assets/json/works.example.json'

export const state = () => ({
  works
})

export const getters = {
  getWorks: (state) => {
    return state.works
  }
}
