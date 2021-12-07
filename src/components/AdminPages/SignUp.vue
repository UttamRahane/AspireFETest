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
      <q-input
      type="password"
      v-model="confirmPassword"
      label="Confirm your password"
      lazy-rules
      :rules="[
        (val) => !!val|| 'type confirm password',
        (val) => val === password || 'The password confirmation does not match.',
      ]"
      />
      <div class="row justify-end q-mb-sm">
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Register" type="submit" color="primary"/>
      </div>
      <div class="row justify-end"><div @click="openSignIn" class="text-primary text-bold q-ml-sm cursor-pointer"><span>Sign in</span></div></div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SignUp',
  components: {  },
  setup () {

    const email = ref(null)
    const password = ref(null)
    const confirmPassword = ref(null)
    const $q = useQuasar()

    return {
      email,
      password,
      confirmPassword,

      onSubmit(){
        const userInfo = {
          email: email.value,
          password: password.value,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Registered successfully. You can signin now!'
        });
      },
      onReset () {
        email.value = null
        password.value = null
        confirmPassword.value = null
      }
    }
  },
  methods: {
    openSignIn(){
      void this.$router.push({ name: 'signin' });
    }
  }
});
</script>