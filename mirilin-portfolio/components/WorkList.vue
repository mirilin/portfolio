<template lang="pug">
  TransitionGroup(name="work-list", tag="ul").work-list
    WorkItem(
      v-for="item in works",
      v-if="category === 'all' || item.tags.includes(category)",
      :key="item.id",
      :item="item"
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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

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
    flex: 0 1 calc(50% - 20px);
    width: calc(50% - 20px);
    margin-bottom: 40px;
    transition: 0.5s;

    &:nth-child(2n) {
      margin-left: 40px;
    }
  }

  @media (--sp) {
    display: block;

    &_item {
      width: 100%;

      &:nth-child(2n) {
        margin-left: 0;
      }
    }
  }
}
</style>
