<template>

    <form @submit.prevent="addTask">
      <my-input name="title" placeholder="Введите задачу" id="title" :value="nameTask" @input="updateNameTask"/>
      <my-button type="submit">Создать задачу</my-button>
    </form>

</template>

<script>
import MyInput from './UI/MyInput.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  components: { MyInput },

  computed: {
    ...mapState({
      nameTask: state => state.nameTask

    })
  },

  methods: {
    updateNameTask(e){
      this.$store.commit('updateNameTask', e.target.value)

    },
    ...mapActions(['createTask']),

    addTask() {
        const task = {
          id: Date.now(),
          title: this.nameTask,
        };
        this.createTask(task);
        this.$store.commit('clearForm')
    },
  },


}
</script>

<style scoped>
form {
  margin: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

::placeholder {
  color: #8c8c8c;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

.d-flex input[type='text'] {
  margin-bottom: 20px;
}
</style>