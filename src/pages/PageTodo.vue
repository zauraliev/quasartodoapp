<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <template v-if="tasksLoaded">
        <div class="row q-mb-sm">
          <search />
          <sort />
        </div>
        <p v-if="search && !Object.keys(tasksTodo).length  
                        && !Object.keys(tasksCompleted).length">
          No search results.
        </p>
        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks 
            v-if="!search && !Object.keys(tasksTodo).length" />
          
          <tasks-todo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo" />
          
          <tasks-completed
            v-if="Object.keys(tasksCompleted).length"
            class="q-mb-xl"
            :tasksCompleted="tasksCompleted" />
        </q-scroll-area>

        <div class="absolute-bottom 
                    text-center 
                    q-mb-sm
                    no-pointer-events">
          <q-btn
            class="all-pointer-events"
            @click="showAddTask = true"
            round
            color="primary"
            size="24px"
            icon="add" />      
        </div>
      </template>
      <template v-else>
        <span class="absolute-center">
          <q-spinner-grid
          color="primary"
          size="3em"
        />
        </span>
      </template>   
    </div>
    <q-dialog v-model="showAddTask">
        <add-task @close="showAddTask = false" />
    </q-dialog> 
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapState('tasks', ['search', 'tasksLoaded'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    'task' : require('components/Tasks/Task.vue').default,
    'no-tasks' : require('components/Tasks/NoTasks.vue').default,
    'tasks-todo' : require('components/Tasks/TasksTodo.vue').default,
    'tasks-completed' : require('components/Tasks/TasksCompleted.vue').default,
    'add-task' : require('components/Tasks/Modals/AddTask.vue').default,
    'search' : require('components/Tasks/Tools/Search.vue').default,
    'sort' : require('components/Tasks/Tools/Sort.vue').default
  }
     
};
</script>
<style lang="scss" scoped>
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>