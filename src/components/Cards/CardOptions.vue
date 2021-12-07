<template>
    <div class="row option-container justify-around full-width items-center">
        <div v-for="option in cardOptions" :key="option.title" class="cursor-pointer font-13 option">
            <q-icon v-if="option.icon !== 'freeze-card'" :name="`svguse:sprite.svg#${option.icon}`"  class="option-icons"/>
            <q-icon v-else name="img:freeze-card.svg" class="option-icons" />
            <div v-text="option.title"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardOptions',
  data(){
    return {
        cardOptions: [{
            icon: 'freeze-card',
            action: () => this.$emit('freez-card'),
            title: 'Freeze card'
        }, {
            icon: 'set-limit',
            action: () => this.$emit('set-spend-limit'),
            title: 'Set spend limit'
        }, {
            icon: 'g-pay',
            action: () => this.$emit('add-to-gpay'),
            title: 'Add to GPay'
        }, {
            icon: 'replace',
            action: () => this.$emit('replace-card'),
            title: 'Replace card'
        }, {
            icon: 'deactivate',
            action: () => this.$emit('cancel-card'),
            title: 'Cancel card'
        }]
    }
  },

});
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables.scss';
.option-container {
    max-width: 500px;
    height: 116px;
    background: $aspire-light-blue;
    border-radius: 8px !important;
}
.option {
    width: 60px;
    text-align: center;    
    .option-icons {
        width: 32px;
        height: 32px;
        margin-bottom: 8px;
    }
}
</style>