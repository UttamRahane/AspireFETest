<template>
  <q-page class="row full-width">
    <div class="page-padding page-bg column full-width full-height no-wrap">
      <div class="font-14 text-color">Available balance</div>
      <div class="amount row items-center q-mb-lg">
        <div class="unit">$$</div>
        <div class="font-26 font-bold text-color">3,000</div>
      </div>
      <q-tabs
          v-model="selectedTab"
          class="text-grey"
          active-color="dark"
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab 
          v-for="tab in tabs" 
          :key="tab.name"
          :name="tab.name" 
          :label="tab.label"
          class="q-pl-none text-color" />
        </q-tabs>
        <q-tab-panels v-model="selectedTab" animated class="full-height">
            <q-tab-panel
              v-for="tab in tabs" 
              :key="tab.name"
              :name="tab.name"
              class="q-py-md q-px-xs"
          >
          <card />
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';

export default defineComponent({
  name: 'Cards',
  components: {  Card },
  data(){
    return {
      tabs: [{
        label: 'My debit cards',
        name: 'my-cards'
      }, {
        label: 'All company cards',
        name: 'company-cards'
      }],
      selectedTab: '',
    }
  },
  created(){
    this.selectedTab = this.tabs[0].name;
  }
});
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables.scss';
  .amount{
    margin-top: 14px;
    .unit{
      padding: 4px 12px;
      background: $aspire-green;
      border-radius: 4px;
      color: $white;
      margin-right: 12px;
      height: 30px;
    }
  }
  ::v-deep {
    .q-tabs__content{
      flex: none !important;
      .q-tab--active{
        .q-tab__label{
          font-weight: 600;
          color: inherit;
        }
      }
      .q-tab__label{
        text-transform: capitalize;
      }
    }
    
  }
</style>