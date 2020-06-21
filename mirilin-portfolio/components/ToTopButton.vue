<template lang="pug">
  .to-top-button
    NuxtLink(v-scroll-to="'body'" to).to-top-button_link 》
</template>

<style lang="scss" scoped>
.to-top-button {
  position: fixed;
  right: 4%;
  bottom: 40px;

  &_link {
    display: inline-block;
    color: $color-text-weak;
    font-size: 60px;
    transform: rotate(-90deg);
  }
}
</style>
