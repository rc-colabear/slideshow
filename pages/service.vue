<template>
  <div>
    <default-app-bar />
    <v-container>
      <v-card class="mx-auto" max-width="1500">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              lg="4"
              sm="4"
            >
              <v-card>
                <h2>Funeral Service and Events</h2>
                <v-card-subtitle class="headline">
                  St. Theresa's Church, West Roxbury, MA<hr>June 3, 2020, 1 PM EDT
                </v-card-subtitle>
                <v-card-text class="title">
                  <p>Select the button below to join </p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    href="https://us02web.zoom.us/j/85836340855"
                    text
                  >
                    <v-icon large>mdi-calendar-star</v-icon>
                    Funeral <br> June 3, 1 pm et
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col class="info darken-2">
              <h3>Joining a Zoom Meeting</h3>
              <p class="zoom-links">We recommend you <b>install the Zoom app</b> on whatever device you plan to use to access the meeting: <v-btn color="blue darken-1" href="https://zoom.us/client/latest/Zoom.pkg"><v-icon color="white" justify="space-around">mdi-laptop-mac</v-icon> computer</v-btn>, <v-btn color="purple darken-1" href="https://itunes.apple.com/us/app/id546505307"><v-icon color="white" justify="space-around">mdi-cellphone-iphone</v-icon>iPhone or iPad</v-btn>, or <v-btn color="orange darken-1" href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings"><v-icon color="white" justify="space-around">mdi-cellphone-android</v-icon>Android phone</v-btn></p>
              <p>You can  access the service using just your web browser, but may not be able to share video or your screen in the discussion after the burial service is complete. For best results please use <v-btn color="orange darken-1" href="https://www.google.com/chrome/https://itunes.apple.com/us/app/id546505307"><v-icon color="white" justify="space-around">mdi-google-chrome</v-icon>Chrome</v-btn> or <v-btn color="green lighten-2" href="https://www.mozilla.org/en-US/firefox/new/"><v-icon color="white" justify="space-around">mdi-firefox</v-icon>Firefox</v-btn></p>
              <p>When you're ready to join the service, click the button at left and you'll be taken to the meeting. Before you join, if you have the app installed, you'll be prompted whether you want to open the meeting in the app. Choose the <v-btn color="orange darken-1">Allow</v-btn> button and you should be good to go. We're looking forward to you joining us!</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import DefaultAppBar from '~/components/DefaultAppBar';

export default {
  components: {
    DefaultAppBar,
  },

  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      images: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    };
  },
};
</script>

<style scoped>
a.zoom-links {
  text-decoration: none
}
</style>
