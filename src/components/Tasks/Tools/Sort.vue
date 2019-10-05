<template>
  <q-select
    class="col-1.5 q-ml-sm"
    label="Sort"
    transition-show="flip-up"
    transition-hide="flip-down"
    emit-value
		map-options
    filled
    v-model="sortBy"
    :options="options"
    stack-label />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      model: null,
      options: [
		      {
		      	label: 'Name',
		      	value: 'name'
		      },
		      {
		      	label: 'Due Date',
		      	value: 'dueDate'
		      }
		    ]
    }
  },
  computed: {
			...mapState('tasks', ['sort']),
			sortBy: {
				get() {
					return this.sort
				},
				set(value) {
					this.setSort(value)
				}
			}
		},
		methods: {
			...mapActions('tasks', ['setSort'])
		}
}
</script>