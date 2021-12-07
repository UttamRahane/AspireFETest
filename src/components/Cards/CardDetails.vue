<template>
    <div>
        <q-list class="list">
            <q-expansion-item
                group="cardInfo"
                class="shadow-1"
            >
            <template #header>
                <div class="row items-center full-width">
                    <q-icon name="svguse:sprite.svg#card-details"  class="icon-size-24 q-mr-md"/>
                    <div> Card details </div>
                </div>
            </template>
                <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item 
            group="cardInfo"
            class="shadow-1 q-mt-sm"
            default-opened>
            <template #header>
                <div class="row items-center full-width">
                    <q-icon name="svguse:sprite.svg#activity"  class="icon-size-24 q-mr-md"/>
                    <div> Recent transactions </div>
                </div>
            </template>
                <q-card>
                    <q-card-section>
                        <div class="row no-wrap items-center border-bottom q-py-sm" v-for="transaction in transactionHistory" :key="transaction.date">
                            <div class="transaction-icon row justify-center items-center">
                                <q-icon name="svguse:sprite.svg#file-storage" class="icon-size-16" />
                            </div>
                            <div class="row justify-between full-width">
                                <div>
                                    <div class="font-14 font-bold q-mb-xs">{{transaction.userName}}</div>
                                    <div class="font-13 q-mb-sm">{{transaction.date}}</div>
                                    <div class="row items-center">
                                        <q-icon name="svguse:sprite.svg#cards"  class="icon-size-10 q-mr-sm fill-white card-icon"/>
                                        <div class="font-12"> {{ transaction.transactionMsg }} </div>
                                    </div>
                                </div>
                                <div>
                                    <span>{{transaction.status === 'credited' ? '+' : '-'}}</span><span>S$ {{transaction.amount}}</span>
                                </div>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardDetails',
  data: () => {
      return {
          transactionHistory: [{
              userName: 'Hamleys',
              date: '20 May 2020',
              transactionMsg: 'Refund on debit card',
              amount: 150,
              status: 'credited'
          }, {
              userName: 'Hamleys',
              date: '20 May 2020',
              transactionMsg: 'Refund on debit card',
              amount: 150,
              status: 'credited'
          }, {
              userName: 'Hamleys',
              date: '20 May 2020',
              transactionMsg: 'Refund on debit card',
              amount: 150,
              status: 'credited'
          }, {
              userName: 'Hamleys',
              date: '20 May 2020',
              transactionMsg: 'Refund on debit card',
              amount: 150,
              status: 'credited'
          }, {
              userName: 'Hamleys',
              date: '20 May 2020',
              transactionMsg: 'Refund on debit card',
              amount: 150,
              status: 'credited'
          }]
      }
  }
});
</script>
<style scoped lang="scss">
@import '../../css/quasar.variables.scss';
    .list{
        margin-top: 30px;;
    }
    .q-expansion-item {
        color: $aspire-blue;
        background: $aspire-lighter-blue;
        border-radius: 8px;;
    }
    .icon-size-24 {
        width: 24px;
        height: 24px;
    }

    .icon-size-10 {
        width: 10px;
        height: 10px;
    }

    .icon-size-16 {
        width: 16px;
        height: 16px;
    }

    .transaction-icon {
        width: 54px;
        height: 48px;
        background: #009DFF1A;
        border-radius: 50%;
        margin-right: 12px;
    }
    .card-icon {
        background: #325baf;
        padding: 4px 8px;
        border-radius: 8px;
    }

    .border-bottom {
        border-bottom: 1px solid #F5F5F5;
    }

    ::v-deep .q-item {
        min-height: 56px;
    }
</style>