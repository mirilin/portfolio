<template lang="pug">
  .page-top
    .page-top_inner
      h1.page-top_title Misaki Yoshitake
      h2.page-top_subtitle Works
      .page-top_nav
        NuxtLink(to="/web").page-top_link Web
        NuxtLink(to="/other").page-top_link Other
</template>

<style lang="scss" scoped>
.page-top {
  height: calc(100vh - 76px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &_inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 4%;
  }

  &_title,
  &_subtitle,
  &_nav {
    font-family: 'Courier New', serif;
  }

  &_title {
    font-size: 48px;
  }

  &_subtitle {
    margin-top: 40px;
    font-size: 36px;
  }

  &_nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    font-size: 24px;
  }

  &_link {
    position: relative;
    margin: 0 20px;

    &:hover {
      color: $color-grey;
    }

    & + &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -20px;
      width: 1px;
      height: 100%;
      background-color: $color-grey;
    }
  }
}
</style>
