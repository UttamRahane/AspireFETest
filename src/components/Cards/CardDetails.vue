<template>
    <q-card class="q-pa-lg">
        <div class="q-pa-xs rounded-border">
            <div class="font-14 green-text font-bold">Show card number</div>
        </div>
        <q-carousel
            v-model="visibleCard"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            height="320px"
            class="carousel"
            >
            <q-carousel-slide class="card" v-for="card in cards" :key="card.cardNumber" name="card.cardNumber">
                <div class="row items-center justify-end">
                    <q-icon name="svguse:sprite.svg#home" class="fill-white aspire-icon q-mr-sm" />
                    <div class="white-text font-22 font-bold font-16"><span>aspire</span></div>
                </div>
               <div class="font-24 font-bold white-text q-mb-lg"> {{card.userName}} </div>
               <div class="font-14 font-bold white-text q-mb-md">{{card.cardNumber}}</div>
               <div class="font-16 font-bold white-text row justify-between q-mb-xm">
                   <div>Thru: {{card.expiryMonth}}/{{card.expiryYear}}</div>
                   <div>CVV: {{card.cvv}}</div>
               </div>
               <div class="row justify-end">
                   <q-icon name="svguse:sprite.svg#visa" class="fill-white visa-icon" />
               </div>
            </q-carousel-slide>
        </q-carousel>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardInfo from './CardInfo';

export default defineComponent({
  name: 'CardDetails',
  components: {  },
  data(){
    return {
        visibleCard: {} as CardInfo,
        cards: [{
            userName: 'Mark Henry',
            cardNumber: '1234 5678 9012 2020',
            expiryMonth: 12,
            expiryYear: 22,
            cvv: 123
        }, {
            userName: 'Uttam Rahane',
            cardNumber: '1234 5678 9012 20201',
            expiryMonth: 12,
            expiryYear: 22,
            cvv: 123
        },
        {
            userName: 'Amol Nirmal',
            cardNumber: '1234 5678 9012 2022',
            expiryMonth: 12,
            expiryYear: 22,
            cvv: 123
        }] as CardInfo[],
    }
  },
  created(){
      [this.visibleCard] = this.cards;
  }
});
</script>

<style scoped lang="scss">
    .card {
        min-height: 124px;
        width: 100%;
        height: 250px !important;
        background: $aspire-green;
        border-radius: 8px;
    }
    .white-text {
        color: $white;
    }
    .green-text {
        color: $aspire-green;
    }

    .fill-white {
        fill: $white;
    }
    .aspire-icon{
        width: 24px;
        height: 24px;
    }
    .visa-icon {
        width: 48px;
        height: 48px;
    }
    @media only screen and (max-width: 1023px) {
        .carousel{
            width: 100%;
        }
    }
     @media only screen and (min-width: 1024px) {
         .carousel{
            width: 50%;
        }
     }
</style>