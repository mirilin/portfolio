<template lang="pug">
  li.work-item
    h2.work-item_title {{ item.name }}
    .work-item_tags
      .work-item_tag(v-for="tag in item.tags") {{ tag }}
    .work-item_url(v-for="url in item.url")
      a.work-item_link(:href="url", target="_blank") {{ url }}
    .work-item_images
      .work-item_inner(v-for="image in item.images")
        img(:src="image", :alt="item.name").work-item_image
    p.work-item_description {{ item.description }}
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

<style lang="scss" scoped>
.work-item {
  padding: 30px;
  box-shadow: 0px 5px 20px 0.5px rgba(84, 84, 84, 0.2);

  &_title {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.5;
  }

  &_tags {
    display: flex;
    margin-bottom: 10px;
    font-size: 12px;
  }

  &_tag {
    padding: 2px 5px;
    border: 1px solid $color-grey;
    color: $color-text-weak;

    & + & {
      margin-left: 5px;
    }
  }

  &_url {
    & + & {
      margin-top: 5px;
    }
  }

  &_link {
    font-size: 14px;
    color: $color-text-weak;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.6;
      transition: opacity 0.3s;
      text-decoration: underline;
    }
  }

  &_images {
    display: flex;
    align-items: center;
    margin-top: 20px;
    text-align: center;
  }

  &_inner {
    &:nth-child(2n) {
      margin-left: 10px;
    }
  }

  &_image {
    max-width: 100%;
    border: 1px solid $color-grey;
  }

  &_description {
    margin-top: 20px;
    white-space: pre-wrap;
  }

  @media (--sp) {
    padding: 20px;
  }
}
</style>
