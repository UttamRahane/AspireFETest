<template>
<div>
    <q-item
    clickable
    @click="openSelectedPage"
    class="menu"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
    <q-icon :name="`svguse:sprite.svg#${icon}`" :class="[selectedMenuItem === routeName ? 'active-menu' : 'inactive-menu']"/>
    </q-item-section>
    <q-item-section>
      <q-item-label :class="[selectedMenuItem === routeName ? 'active' : 'inactive', 'menu-title']">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuComponent',
  props: {
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ''
    },

    routeName: {
      type: String,
      default: ''
    },
    selectedMenuItem: {
        type: String,
        default: '',
    }
  },
  methods: {
      openSelectedPage(){
        void this.$router.push({
            name: this.routeName,
        });
        this.$emit('select-menu', this.routeName);
      }
  }
})
</script>
<style scoped lang="scss">
    @import '../../css/quasar.variables.scss';
    @media only screen and (max-width: 1023px) {
        .menu-title{
            &.inactive{
                color: $gray;
            }
            &.active{
                color: $aspire-green;
                font-weight: bold;
            }
            font-size: 0.5625rem;
        }
        .menu{
            display: flex;
            flex-direction: column;
            align-items: center;
            .active-menu{
                fill: $aspire-green;
            }
            .inactive-menu{
                fill: $gray;
            }
        }
        ::v-deep .q-item__section--side{
            padding-right: 0px;
        }
    }
    @media only screen and (min-width: 1024px) {
        .menu-title{
            &.inactive{
                color: $white;
            }
            &.active{
                color: $aspire-green;
                font-weight: bold;
            }
        }
        .menu{
            display: flex;
            flex-direction: row;
            .active-menu{
                fill: $aspire-green;
            }
            .inactive-menu{
                fill: $white;
            }
        }
    }
    
    ::v-deep {
        .q-item__section--avatar {
            min-width: 24px;
        }
    }
</style>
