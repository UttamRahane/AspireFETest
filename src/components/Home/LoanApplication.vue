<template>
    <div class="q-pa-sm">
        <h5 class="q-mb-sm">Loan Application</h5>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            >
            <q-input
                v-model="loanAmount"
                type="number"
                label="Enter required loan amount"
                lazy-rules
                :rules="[ val => val > 0 || 'Please enter loan amount']"
            />
            <q-input
                v-model="loanTerms"
                type="number"
                label="Enter loan terms"
                hint="Enter number of months which will take for a loan to be completely paid off "
                lazy-rules
                :rules="[ val => val > 0 || 'Please enter loan terms']"
            />
            <div class="row justify-end q-mb-sm">
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                <q-btn label="Apply" type="submit" color="primary"/>
            </div>
        </q-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'LoanApplication',
    components: {  },
    setup () {
        const loanAmount = ref(null)
        const loanTerms = ref(null)

        return {
            loanAmount,
            loanTerms,
            onReset () {
                loanAmount.value = null
                loanTerms.value = null
            }
        }
    },
    methods: {
        onSubmit() {
            const date = new Date();
            this.$store.commit('loan/addLoanApplication', {
                loanAmount: this.loanAmount,
                loanTerms: this.loanTerms,
                dateOfApllication: date,
                paidTerms: 0,
                dueDate: new Date(date.setMonth(date.getMonth()+1)),
                status: 'Pending',
                id: Math.random().toString(16).slice(2),
            })
        },
    }
});
</script>