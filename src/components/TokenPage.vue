<template>
  <div>
    <v-text-field
      v-model="apiTokenInput"
      class="short-text-field"
      label="API Token"
      single-line
      solo
    ></v-text-field>
    <v-btn @click="$emit('set-api-token', apiTokenInput)" color="success">Set</v-btn>
  </div>
</template>

<script>
export default {
  props: ["apiToken"],
  data: () => ({
    apiTokenInput: "",
  }),
  created() {
    //   var vm = this
      this.apiTokenInput = this.apiToken
  },
  methods: {

  },
};
</script>

<style lang="scss">
</style>