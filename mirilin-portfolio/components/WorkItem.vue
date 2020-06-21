<template lang="pug">
  li.work-item
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
    }
  }
}
</script>
