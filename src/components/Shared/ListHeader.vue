<template>
  <q-banner
    dense
    inline-actions
    :class="bgColor"
    class="list-header text-white bg-green-4 text-center">
    <span class="text-bold text-subtitle1"><slot /></span>
  </q-banner>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style lang="scss">
.list-header {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>