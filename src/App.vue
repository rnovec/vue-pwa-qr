<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            <StreamBarcodeReader
              v-if="dialog"
              @decode="onDecode"
              @loaded="onLoaded"
            ></StreamBarcodeReader>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
  name: 'App',

  components: {
    StreamBarcodeReader
  },

  data: () => ({
    dialog: false,
    text: ''
  }),

  methods: {
    onDecode (val) {
      if (val) {
        this.text = val
        this.dialog = false
        // llamar API
      }
    },
    onLoaded () {
      console.log('Loaded!')
    },
    onError(error) {
      console.log(error)
    }
  }
}
</script>
