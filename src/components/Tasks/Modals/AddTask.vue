<template>
  <q-card>
        <modal-header>Add Task</modal-header>
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
    mixins: [mixinAddEditTask],
    data() {
      return {
        taskToSubmit: {
          name: '',
          dueDate: '',
          dueTime: '',
          completed: false
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['addTask']),
      
      submitTask() {
        console.log('submitTask')
        console.log(this.taskToSubmit)
        this.addTask(this.taskToSubmit);
        this.$emit('close');
      },
      
    }
  }
</script>