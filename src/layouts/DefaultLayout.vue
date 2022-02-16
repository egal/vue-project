<template>
  <div class="layout-container">
    <div class="page-header">
      <e-button size="sm" :rounded="true" :style-config="styleConfig">
        <BootstrapIcon class="button-icon" icon="bell"></BootstrapIcon>
      </e-button>
      <e-avatar
        :name="'user name'"
        bgColor="#A0AEC0"
        :isOnline="true"
      ></e-avatar>
    </div>
    <e-navbar-right
      :links="links"
      :logo="require('@/assets/Logo.svg')"
      :smallLogo="require('@/assets/LogoSmall.svg')"
      @on:openMenu="openMenu"
      @on:closeMenu="closeMenu"
    ></e-navbar-right>

    <div class="content-container" :class="{ 'menu-open': menuOpen }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'

export default {
  name: 'DefaultLayout',
  components: {
    BootstrapIcon,
  },
  data() {
    return {
      links: [
        { name: 'home', to: '/' },
        { name: 'link 1', to: '/link-1' },
        { name: 'link 2', to: '/link-2' },
        { name: 'link 3', to: '/link-3' },
        { name: 'link 4', to: '/link-4' },
      ],
      styleConfig: {
        backgroundColor: '#fff',
        hover: {
          backgroundColor: '#fff',
        },
        active: {
          backgroundColor: '#fff',
        },
        disabled: {
          backgroundColor: '#fff',
        },
      },
      menuOpen: true,
    }
  },
  computed: {},
  methods: {
    openMenu() {
      this.menuOpen = true
    },
    closeMenu() {
      this.menuOpen = false
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/variables';

.layout-container {
  width: 100%;
  height: 100vh;

  .page-header {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid $gray-200;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;

    .button-icon {
      width: 14px;
      height: 16px;
      color: $gray-800;
    }
  }
  .content-container {
    margin-left: 66px;
    transition: all 0.3s ease-in-out;
  }
  .content-container.menu-open {
    margin-left: 250px;
  }
}
</style>
