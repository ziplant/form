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

.dropdown
  appearance: none
  background-image: url('assets/dropdown.svg')
  background-size: 10px
  background-repeat: no-repeat
  background-position: 96% 50%

.flex
  display: flex
  &--middle
    align-items: center
  &--right
    margin-left: auto
</style>
