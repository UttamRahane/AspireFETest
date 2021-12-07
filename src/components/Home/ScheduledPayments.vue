<template>
<div class="q-pa-md">
    <q-list>
      <q-item v-for="application in loanApplications" :key="application.loanAmount" class="q-mb-sm">
        <q-item-section>
          <q-item-label>Repayment amount: {{(application.loanAmount / application.loanTerms).toFixed(2)}}</q-item-label>
          <q-item-label caption lines="2">Due Date: {{application.dueDate.toDateString()}} </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption class="q-mb-sm">{{ application.status }}</q-item-label>
          <q-btn label="Repay" color="primary" size="xs" :disable="application.status === 'Paid'" @click="payLoanEMI(application.id)"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'ScheduledPayments',
  components: { },
  computed: {
    ...mapGetters({
        loanApplications: 'loan/getLoanApplications',
    })
  },
  methods: {
    payLoanEMI(id: string){
      this.$store.commit('loan/doRepayment', id);
    }
  }
});
</script>