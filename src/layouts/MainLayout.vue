<template>
  <q-layout>
    <q-drawer
      v-model="selectedMenu"
      bordered
      class="shadow-up-1"
    >
    <q-icon class="logo-with-name mobile-hide" name="svguse:sprite.svg#logo-with-name"/>
    <div class="company-info font-15 mobile-hide">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
      <q-list class=" menu-item">
        <menu-component
          v-for="menu in MenuOptions"
          :key="menu.title"
          :title="menu.title"
          :icon="menu.icon"
          :route-name="menu.routeName"
          :selected-menu-item="selectedMenu"
          @select-menu="selectedMenu = $event"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import MenuComponent from 'components/Menu/MenuComponent.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    routeName: 'home'
  },
  {
    title: 'Cards',
    icon: 'cards',
    routeName: 'cards'
  },
  {
    title: 'Payments',
    icon: 'payments',
    routeName: 'payments'
  },
  {
    title: 'Credit',
    icon: 'credit',
    routeName: 'credit'
  },
  {
    title: 'Settings',
    icon: 'account',
    routeName: 'settings'
  },
];

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuComponent,
  },

  data() {
    return {
      selectedMenu: '',
      MenuOptions: linksList
    }
  },
  created(){
    this.selectedMenu = linksList[1].routeName;
  }
  })
</script>
<style scoped lang="scss">
@import './../css/quasar.variables.scss';
@media only screen and (max-width: 1023px) {
  .q-drawer-container{
  ::v-deep{
    .q-drawer{
      visibility: visible;
      width: 100% !important;
      height: 56px;
      transform: translateX(0px) !important;
      background: $white;
      top: auto;
      overflow: hidden;
    }
    .q-item {
      padding: 8px 8px;
    }
    .q-drawer__content{
      overflow: hidden !important;
      margin-top: 4px;
    }
  } 
}

  .menu-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
}
@media only screen and (min-width: 1024px) {
  @import '../css/quasar.variables.scss';
  .q-drawer-container{
  ::v-deep{
    .q-drawer{
      visibility: visible;
      width: 340px !important;
      transform: translateX(0px) !important;
      background: $aspire-blue;
    }
    .q-item {
      padding: 30px 48px;
    }
  } 
}
  .company-info{
    color:#ffffff;
    opacity: 40%;
    padding: 0 16px 48px 48px;
  }
  .logo-with-name {
    width: 136px !important;
    height: 136px !important;
    padding-left: 48px;
  }
  .menu-item{
    display: flex;
    flex-direction: column;
  }
}
</style>
