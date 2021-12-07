<template>
  <q-layout>
    <q-page class="row items-center justify-evenly">
        <q-card class="card-width">
            <div class="branding-background">
                <branding />
            </div>
            <div class="q-pa-lg">
                <router-view />
            </div>
        </q-card>
    </q-page>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Branding from 'components/Company/Branding.vue'

export default defineComponent({
  name: 'AdminLayout',
  components: {
      Branding,
  }
  })
</script>
<style scoped>
    .card-width {
        max-width: 90%;
    }
    .branding-background {
        background: #325BAF;
    }
</style>

