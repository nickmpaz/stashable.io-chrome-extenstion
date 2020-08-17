<template>
  <v-app>
    <v-card height="400" width="800">
      <v-btn color="success">text</v-btn>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  created() {
    var sending = browser.runtime.sendMessage({
      message: "getApiToken",
    });
    sending.then(response => {
      console.log(response.message)      
    });
  },
  data: () => ({
    //
  }),
};
</script>

