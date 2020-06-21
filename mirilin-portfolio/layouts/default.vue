<template lang="pug">
  .layout-default
    GlobalHeader.layout-default_header
    Nuxt.layout-default_nuxt
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
export default {
  components: {
    GlobalHeader
  }
}
</script>
