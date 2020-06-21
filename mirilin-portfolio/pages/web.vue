<template lang="pug">
  div
    .web-title Webのお仕事
    div {{ category }}
    .category-list
      .category-list_item(@click="setCategory('all')") All
      .category-list_item(@click="setCategory('coding')") Coding
      .category-list_item(@click="setCategory('design')") Design
      .category-list_item(@click="setCategory('direction')") Direction
    WorkList(:category="category")
    NuxtLink(to="/") TOPへ
</template>

<script>
import { mapGetters } from 'vuex'
import WorkList from '@/components/WorkList.vue'

export default {
  components: {
    WorkList
  },
  computed: {
    ...mapGetters({
      category: 'category/geCategory'
    })
  },
  mounted() {
    this.$store.commit('category/setCategory', 'all')
  },
  methods: {
    setCategory(category) {
      this.$store.commit('category/setCategory', category)
    }
  }
}
</script>
