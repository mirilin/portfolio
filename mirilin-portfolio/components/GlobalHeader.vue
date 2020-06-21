<template lang="pug">
  header.global-header
    .global-header_inner
      .global-header_title
        NuxtLink(to="/") Misaki Yoshitake
      nav.global-header_nav
        NuxtLink(to="/web").global-header_link Web
        NuxtLink(to="/other").global-header_link Other
</template>

<style lang="scss" scoped>
.global-header {
  font-family: 'Courier New', serif;
  box-shadow: 0px 5px 10px rgba(84, 84, 84, 0.1);

  &_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 4%;
  }

  &_title {
    font-size: 32px;
  }

  &_nav {
    display: flex;
  }

  &_link {
    font-size: 18px;

    & + & {
      margin-left: 40px;
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background-color: $color-grey;
      transition: 0.5s;
    }

    &.nuxt-link-exact-active {
      &::after {
        width: 100%;
        transition: 0.3s;
      }
    }
  }
}
</style>
