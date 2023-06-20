<template>
  <div>
    <h2>Задачи</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :contenteditable="contenteditable">{{ task.title }}</span>
        <div class="func-btns">
          <my-button class="edit" @click="editTask(task)">Edit</my-button>
          <my-button class="delete" @click="deleteTask(task.id)">Delete</my-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import MyButton from './UI/MyButton.vue';

export default {
  components: { MyButton },

  data(){
    return{
      contenteditable: false,
    }
  },

  computed: {
    ...mapState(['tasks']),
  },

  methods: {
    ...mapActions(['removeTask', 'modifyTask']),

    deleteTask(taskId) {
      this.removeTask(taskId);
    },

    editTask(task) {

      const updatedTitle = prompt('Enter the updated title:', task.title);
      if (updatedTitle) {
        const updatedTask = { ...task, title: updatedTitle };
        this.modifyTask(updatedTask);
      }

    },
  },
};
</script>

<style scoped>

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
}

ul li {
  border: 1px solid #f2f2f2;
  border-radius: .5rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete{
  background-color: red;
}

.delete:hover{
  background-color: darkred;
}

</style>