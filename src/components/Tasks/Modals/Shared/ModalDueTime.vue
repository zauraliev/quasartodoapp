<template>
  <div
    class="row q-mb-sm">
    <q-input
      class="col"
      outlined
      label="Due time"
      :value="dueTime"
      @input="$emit('update:dueTime', $event)">
      <template v-slot:append>
        <q-icon 
          v-if="dueTime !== ''"
          name="close" 
          @click="$emit('update:dueTime', '')"
          class="cursor-pointer" />
        <q-icon 
          name="access_time"
          class="cursor-pointer">
          <q-popup-proxy>
            <q-time 
              :value="dueTime"
              @input="$emit('update:dueTime', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
export default {
  props: ['dueTime']
};
</script>