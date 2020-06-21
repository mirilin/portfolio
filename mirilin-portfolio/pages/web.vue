<template lang="pug">
  .page-web
    .page-web_inner
      h1.page-web_title Web Works
      .page-web_categories
        .page-web_category(@click="setCategory('all')" :class="category == 'all' ? '-current' : ''") All
        .page-web_category(@click="setCategory('coding')" :class="category == 'coding' ? '-current' : ''") Coding
        .page-web_category(@click="setCategory('design')" :class="category == 'design' ? '-current' : ''") Design
        .page-web_category(@click="setCategory('direction')" :class="category == 'direction' ? '-current' : ''") Direction
      WorkList(:category="category").page-web_works
      ToTopButton
</template>

<script>
import { mapGetters } from 'vuex'
import WorkList from '@/components/WorkList.vue'
import ToTopButton from '@/components/ToTopButton.vue'

export default {
  components: {
    WorkList,
    ToTopButton
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

<style lang="scss" scoped>
.page-web {
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

  &_categories {
    display: flex;
  }

  &_category {
    padding: 5px 10px;
    border: 1px solid $color-grey;
    cursor: pointer;
    margin-right: 20px;
  }

  &_category.-current {
    background-color: $color-grey;
  }

  &_works {
    margin-top: 20px;
  }

  @media (--sp) {
    &_title {
      margin-bottom: 30px;
    }

    &_categories {
      flex-wrap: wrap;
    }

    &_category {
      margin-top: 10px;
    }
  }
}
</style>
