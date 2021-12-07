<template>
    <q-card class="full-height row justify-around">
        <div class="q-pa-lg carousel-container">
            <div class="q-pa-xs rounded-border row justify-end items-center">
                <q-icon name="svguse:sprite.svg#eye" class="fill-green eye-icon" />
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
            <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <div v-if="active" class="active-navigation" @click="onClick"></div>
                <q-btn v-else size="sm" class="inactive-navigation" :icon="btnProps.icon" flat round dense @click="onClick" />
            </template>
            
            <q-carousel-slide class="card" v-for="card in cards" :key="card.cardNumber" :name="card.cardNumber">
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
            <card-options></card-options>
        </div>
        <card-details class="q-pa-lg carousel-container" />
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardInfo from './CardInfo';
import CardOptions from './CardOptions.vue';
import CardDetails from './CardDetails.vue';

export default defineComponent({
  name: 'Card',
  components: {  CardOptions, CardDetails },
  data(){
    return {
        visibleCard: '',
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
      this.visibleCard = this.cards[0].cardNumber;
  }
});
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables.scss';
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
    .aspire-icon{
        width: 24px;
        height: 24px;
    }
    .visa-icon {
        width: 48px;
        height: 48px;
    }
    .eye-icon {
        height: 20px;
        width: 20px;
        margin: 4px 4px 0 0;
    }
    .carousel-container {
        max-width: 500px;
    }
    .active-navigation {
        width: 26px;
        height: 12px;
        margin-top: 2px;
        background: $aspire-green;
        border-radius: 6px;
    }
    .inactive-navigation {
        opacity: 20%;
    }
    @media only screen and (max-width: 1023px) {
        .carousel-container {
            width: 100%;
        }
    }
     @media only screen and (min-width: 1024px) {
         .carousel-container {
            width: 50%;
        }
     }
</style>