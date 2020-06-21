<template lang="pug">
  transition(name="fade", mode="out-in")
    .work-item(v-if="category === 'all' || item.tags.includes(category)")
      .work-item_title {{ item.name }}
      a.work-item_link(:href="item.url", target="_blank") {{ item.url }}
      .work-item_description {{ item.description }}
      .work-item_tags
        .work-item_tag(v-for="tag in item.tags") {{ tag }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
