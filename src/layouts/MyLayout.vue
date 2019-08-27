<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  methods: {
    openURL
  },
  computed: {
    title(){
      let currentPath = this.$route.fullPath;
      if(currentPath == '/') {
        return 'Quasar Chat'
      } else if(currentPath == '/chat') {
        return 'Chat'
      } else if(currentPath == '/auth') {
        return 'Login to Quasar Chat'
      }
    }
  }
}
</script>

<style>
.header {
    background: linear-gradient(145deg,#027be3 11%,#014a88 75%);
}
</style>
