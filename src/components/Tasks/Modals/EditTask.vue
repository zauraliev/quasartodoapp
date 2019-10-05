<template>
  <q-card>
        <modal-header>Edit Task</modal-header>
        <form @submit.prevent="submitForm()">
          <q-card-section>
            <modal-task-name 
              ref="modalTaskName"
              :name.sync="taskToSubmit.name"/>
            <modal-due-date
              @clear="clearDueDate"
              :dueDate.sync="taskToSubmit.dueDate" />
            <modal-due-time v-if="taskToSubmit.dueDate"
              :dueTime.sync="taskToSubmit.dueTime" />
          </q-card-section>
          <modal-buttons></modal-buttons>
        </form>
      </q-card>
</template>
<script>
  import { mapActions } from 'vuex'
  import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'
  export default {
    props: ['task', 'id'],
    mixins: [mixinAddEditTask],
    data() {
      return {
        taskToSubmit: { }
      }
    },
    methods: {
      ...mapActions('tasks', ['updateTask']),
      submitTask() {
        let payload = {
          id: this.id,
          updates: this.taskToSubmit
        } 
        this.updateTask(payload);
        this.$emit('close');
      }
    },
    mounted() {
      this.taskToSubmit = Object.assign({}, this.task)
    }
  }
</script>