<template>
  <q-page class="flex">
    <q-list 
      class="full-width"
      separator
      >
      <q-item
        v-for="user in users"
        :key="user.id"
        clickable
        v-ripple
        to="/chat"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge 
            :color="user.online ? 'primary' : 'grey'">
            {{ user.online ? "Online" : "Offline" }}
          </q-badge>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>



export default {
  data () {
    return {
      users: [{
        id: 1,
        name: 'Max',
        online: true,
      }, {
        id: 2,
        name: 'Dan',
        online: true,
      }, {
        id: 3,
        name: 'Alex',
        online: false,
      }, {
        id: 4,
        name: 'Anna',
        online: true,
      }]
    }
  }
}
</script>

<style>
</style>
