<template lang="pug">
  TransitionGroup(name="work-list", tag="ul")
    WorkItem(
      v-for="item in works",
      v-if="category === 'all' || item.tags.includes(category)",
      :key="item.id",
      :item="item",
      :category="category"
    ).work-list_item
</template>

<script>
import { mapGetters } from 'vuex'
import WorkItem from '@/components/WorkItem.vue'

export default {
  components: {
    WorkItem
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      works: 'works/getWorks'
    })
  }
}
</script>

<style lang="scss" scoped>
.work-list {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }

  &-leave-active {
    position: absolute;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  &-move {
    transition: 0.5s;
  }

  &_item {
    transition: 0.5s;
  }
}
</style>
