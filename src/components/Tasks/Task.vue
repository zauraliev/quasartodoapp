<template>
  <q-item 
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-touch-hold:500.mouse="showEditTaskModal"
    v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="task.completed" class="no-pointer-events" />
    </q-item-section>
    <q-item-section>
      <q-item-label
       :class="{ 'text-strikethrough': task.completed }"
       v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>
    </q-item-section>
    <q-item-section 
      v-if="task.dueDate"
      side>
      <div class="row">
        <div class="column justify">
          <q-icon 
            name="event"
            size="18px"
            class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label 
            class="row justify-end"
            caption>{{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label 
            class="row justify-end"
            caption><small>{{ taskDueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
        @click.stop="showEditTaskModal"
        dense
        flat 
        round 
        color="primary" 
        icon="edit" />
        <q-btn
        @click.stop="confirm = true"
        dense
        flat 
        round 
        color="negative" 
        icon="delete" />
      </div>
    </q-item-section>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to delete the task "{{ task.name }}"?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="negative" v-close-popup />
          <q-btn flat label="Confirm" color="positive" @click.stop="promtToDelete(id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-ajax-bar
      ref="bar"
      position="top"
      color="green"
      size="10px"
      skip-hijack />
      <q-dialog v-model="showEditTask">
        <edit-task
          :task="task"
          :id="id" 
          @close="showEditTask = false" />
      </q-dialog>
    </q-item>
</template>
<script>

import { mapActions, mapState, mapGetters } from 'vuex'
import { date } from 'quasar'

export default {
  props: ['task', 'id'],
  data() {
    return {
      confirm: false,
      showEditTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings', ['settings']),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        return date.formatDate(`${this.task.dueDate} ${this.task.dueTime}`, 'h:mm A')
      }
      return this.task.dueTime
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    showEditTaskModal() {
      this.showEditTask = true
    },
    promtToDelete(id) {
      const bar = this.$refs.bar
      bar.start()

      
      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.deleteTask(id);
          this.confirm = false;
          this.$refs.bar.stop()
        }
      }, Math.random() * 1000 + 1000)
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM D, YYYY')
    },
    searchHighlight(value, search) {
      let searchRegExp = new RegExp(search, 'ig')
      if(search){
        return value.replace(searchRegExp, (match) => {
          return `<span class="bg-yellow-6">${match}</span>`
        })
      }
      return value
    }
  },
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>