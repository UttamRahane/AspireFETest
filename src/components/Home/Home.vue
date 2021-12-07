<template>
  <q-page class="row q-pa-sm window-height">
    <q-card class="card full-width full-height">
      <loan-application class="component-width q-mb-sm"/>
      <scheduled-payments class="component-width" />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoanApplication from './LoanApplication.vue';
import ScheduledPayments from './ScheduledPayments.vue';

export default defineComponent({
  name: 'Home',
  components: { LoanApplication, ScheduledPayments },
  data(){
    return {
      handle: 0,
    }
  },
  mounted(){
    this.handle = window.setInterval(() => this.$store.commit('loan/doReadyForPayment'), 3600000);
  },
  beforeMount(){
    clearInterval(this.handle);
  }
});
</script>
<style scoped>
  .component-width {
    max-width: 500px;
  }

  @media only screen and (max-width: 1023px) {
    .component-width {
        width: 100%;
    }
  }
  @media only screen and (min-width: 1024px) {
    .component-width {
      width: 50%;
      padding-left: 20px;
    }
    .card {
      display: flex;
    }
  }
</style>
