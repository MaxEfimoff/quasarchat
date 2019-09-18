<template>
  <q-form @submit="submitForm">
    <div class="q-gutter-md">
      <q-input
        v-if="tab == 'register'"
        outlined
        v-model="formData.name"
        label="Name" />
      <q-input
        outlined
        v-model="formData.email"
        label="Email"
      />
      </div>
      <q-input
        v-model="formData.password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        class="q-mt-md"
        >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="row">
        <q-space/>
        <q-btn
          color="primary"
          :label="tab"
          class="q-mt-md"
          type="submit"
        />
      </div>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['tab'],
  methods: {
    ...mapActions('store', ['registerUser', 'loginUser']),
    submitForm() {
      if (this.tab == 'login') {
        this.loginUser(this.formData);
      } else {
        this.registerUser(this.formData);
      }
    }
  },
  data () {
    return{
      formData: {
      name: '',
      email: '',
      password: '',
      },
      isPwd: true,
    }
  }
}
</script>

<style>

</style>