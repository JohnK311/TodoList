<template>

    <form action="post" name="addTasks" @submit.prevent>

      <my-input v-model="task.title" name="title" placeholder="Название задачи" id="title" />

      <my-input v-model="task.body" type="text" name="body" id="body" placeholder="Описание" />
      <my-button @click="createTask">Создать задачу</my-button>

    </form>

</template>

<script>
import MyInput from '../../src/components/UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';

export default {
  components: { MyInput, MySelect },

  data() {
    return {
      task: {
        title: '',
        body: '',
        complite: false
      }
    }

  },
  methods: {

    createTask() {
      if (this.task.title !== '' || this.task.body !== '') {
        this.task.id = Date.now();
        this.$emit('create', this.task);
      }

      this.task = {
        title: '',
        body: '',
        complite: false
      }
    },

  }
}
</script>

<style scoped>
form {
  margin: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.selectDiv{
  display: flex;
  justify-content: flex-end;
  height: 30px;
}

/* #createTask {
  padding: 15px 20px;
  background-color: #0cb980;
  font-size: 16px;
  color: #ffffff;
  border-radius: 10px;
  width: 170px;
  margin-top: 30px;
  transition: 0.3s ease-out;
} */
</style>