<template>
  <teleport to="#modal">
    <div class="modal">
      <slot></slot>
    </div>
  </teleport>
</template>


<style lang="sass">
.modal
  position: fixed
  padding: 25px 40px
  top: 5px
  right: 5px
  opacity: 0.9
  box-shadow: 0 0 3px -1px #000
  border-radius: 3px
  font-size: 20pxpx
  background-color: #bbb
</style>