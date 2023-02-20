<template>
  <div v-if="tasks.length > 0">
    <task-item v-for="task in tasks" :key="task.id" :task="task" @remove="$emit('remove', task)" @complite="$emit('complite', task)">

    </task-item>
  </div>

  <h3 v-else>Список задач пуст</h3>
</template>

<script>

import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },

  props:{
    tasks:{
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>


</style>