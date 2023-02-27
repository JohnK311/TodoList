<template>
  <div v-if="tasks.length > 0">
    <transition-group name="task-list">
    <task-item v-for="task in tasks" :key="task.id" :task="task" @remove="$emit('remove', task)" @complite="$emit('complite', task)">

    </task-item>
  </transition-group>
  </div>

  <h3 v-else>Список задач пуст</h3>
</template>

<script>

import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },

  props: {
    tasks: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

.task-list-item {
  display: inline-block;
  margin-right: 10px;
}
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}
.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

</style>