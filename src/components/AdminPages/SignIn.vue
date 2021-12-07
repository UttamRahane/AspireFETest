<template>
  <div>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        v-model="email"
        label="Enter your email id"
        lazy-rules
        :rules="[ val => /.+@.+/.test(val) || 'Invalid Email address']"
      />

      <q-input
        type="password"
        v-model="password"
        label="Enter your password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter password']"
      />

      <div class="row justify-end q-mb-sm">
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Login" type="submit" color="primary"/>
      </div>
      <div class="row justify-end">Don’t have an account yet? <div @click="openSignUp" class="text-primary text-bold q-ml-sm cursor-pointer"><span>Register</span></div></div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SignIn',
  components: { },
  setup () {

    const email = ref(null)
    const password = ref(null)
    const q = useQuasar()

    return {
      email,
      password,
      q,

      onReset () {
        email.value = null
        password.value = null
      }
    }
  },
  methods: {
    onSubmit () {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '') as { email: string, password: string };
      if(userInfo?.email === this.email && userInfo?.password === this.password){
        void this.$router.push({ name: 'cards'});
      } else{
          this.q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Email id or password is incorrect.'
          })
      }
    },
    openSignUp(){
      void this.$router.push({ name: 'signup'});
    }
  }
});
</script>