<template>
  <AddClient />
</template>

<script>
import AddClient from "./components/AddClient";

export default {
  name: "App",
  components: {
    AddClient,
  },
};
</script>

<style lang="sass">
#app, #modal
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.--flex-end
  margin-left: auto
</style>
