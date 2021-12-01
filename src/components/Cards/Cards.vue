<template>
  <q-page>
    <div class="page-padding page-bg column h-100">
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
          class="q-pl-none" />
        </q-tabs>
        <q-tab-panels v-model="selectedTab" animated>
            <q-tab-panel
              v-for="tab in tabs" 
              :key="tab.name"
              :name="tab.name"
              class="q-py-md q-px-xs"
          >
          <card-details></card-details>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardDetails from './CardDetails.vue';

export default defineComponent({
  name: 'Cards',
  components: {  CardDetails },
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
  }
});
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables.scss';
  .amount{
    margin-top: 14px;
    .unit{
      padding: 4px 12px;
      background: #01D167;
      border-radius: 4px;
      color: #fff;
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
          color: $dark;
        }
      }
      .q-tab__label{
        text-transform: capitalize;
      }
    }
    
  }
</style>