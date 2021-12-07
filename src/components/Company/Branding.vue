<template>
  <div>
    <q-icon :class="[hideBrandingOnMobileScreen ? 'mobile-hide': '', 'logo-with-name' ]" name="svguse:sprite.svg#logo-with-name"/>
    <div class="company-info font-15 mobile-hide">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Branding',
  components: {  },
  props:{
      hideBrandingOnMobileScreen: {
        type:Boolean,
      },
  }
});
</script>
<style scoped lang="scss">
    .company-info{
        color:#ffffff;
        opacity: 40%;
        padding: 0 16px 48px 48px;
    }
    .logo-with-name {
        width: 136px !important;
        height: 136px !important;
        padding-left: 48px;
    }
</style>