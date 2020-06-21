<template lang="pug">
  .page-other
    .page-other_inner
      h1.page-other_title Other Works
      //- OtherWorks
      ToTopButton
</template>

<script>
import ToTopButton from '@/components/ToTopButton.vue'
import OtherWorks from '@/components/OtherWorks.vue'

export default {
  components: {
    ToTopButton,
    OtherWorks
  }
}
</script>

<style lang="scss" scoped>
.page-other {
  &_inner {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 4%;
  }

  &_title {
    margin-bottom: 40px;
    font-family: 'Courier New', serif;
    font-size: 24px;
  }
}
</style>
