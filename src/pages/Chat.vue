<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      User is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name='message.from'
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width"
          @submit="sendMessage">
          <q-input outlined v-model="newMessage" label="Message" dense rounded bg-color="white">
          <template v-slot:before>
          </template>
          <template v-slot:after>
            <q-btn
              round
              dense
              flat
              icon="send"
              color="white"
              type="submit"
            />
        </template>
      </q-input>
        </q-form>
        
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'How are you',
          from: 'me'
        },
        {
          text: 'Okay, thanks!',
          from: 'them'
        },
        {
          text: 'Call me back, ok?',
          from: 'me'
        },
      ]
    }
  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
    }
  }
}
</script>

<style>
</style>
