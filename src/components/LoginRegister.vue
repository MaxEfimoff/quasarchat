<template>
  <q-form @submit="submitForm">
    <div class="q-gutter-md">
      <q-input
        v-if="tab == 'register'"
        outlined
        v-model="text"
        label="Name" />
      <q-input
        outlined
        v-model="text"
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
export default {
  props: ['tab'],
  methods: {
    submitForm() {
      if (this.tab == 'login') {
        console.log('login the user')
      } else {
        console.log('register the user')
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