<template lang="pug">
  div
    .web-title Webのお仕事
    div {{ category }}
    .category-list
      .category-list_item(@click="setCategory('all')") All
      .category-list_item(@click="setCategory('coding')") Coding
      .category-list_item(@click="setCategory('design')") Design
      .category-list_item(@click="setCategory('direction')") Direction
    WorkItem(
      v-for="item in works",
      :key="item.id",
      :item="item",
      :category="category"
    )
    NuxtLink(to="/") TOPへ
</template>

<script>
import { mapGetters } from 'vuex'
import WorkItem from '@/components/WorkItem.vue'

export default {
  components: {
    WorkItem
  },
  computed: {
    ...mapGetters({
      works: 'works/getWorks',
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
