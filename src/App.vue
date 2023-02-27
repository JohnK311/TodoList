<template>
  <div>

    <div class="container-xl">
      <header>
        <h1>To do List</h1>
      </header>

    </div>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="selectDiv col-sm-3 d-flex">
            <my-select v-model="selectedSort" :options="sortOptions"></my-select>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-xl d-flex flex-lg-column align-items-center">

        <div class="list col">
          <task-form @create="createTask"></task-form>
        </div>

    </div>
      <div class="container-xl d-flex flex-lg-column align-items-center">

        <div class="col tasks">
          <task-list :tasks="tasks" @remove="removeTask" @complite="compliteTask" v-if="!isTaskLoading"></task-list>

          <div v-else>Идет загрузка задач...</div>

        </div>
      </div>

    </section>


  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskItem from './components/TaskItem.vue'
// import axios from 'axios'
export default {
  components: {
    TaskForm,
    TaskList,
    TaskItem,
  },
  data() {
    return {
      tasks: [],
      saveTasks: [],
      complitedTask: [],
      isTaskLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: false, name: 'Активные' },
        { value: true, name: 'Завершенные' },

      ],
    }
  },

  methods: {
    createTask(task) {
      this.tasks.push(task);
      this.saveTasks = this.tasks;
    },

    removeTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      this.complitedTask = this.complitedTask.filter(t => t.id !== task.id);
    },

    compliteTask(task) {
      let id = task.id;
      this.tasks.find(task => {
        if (task.id === id) task.complite = true;
      })
      this.complitedTask.push(task);
      this.tasks = this.tasks.filter(task => task.complite !== true)
    }
  },

  watch: {
    selectedSort(newValue) {
      if (newValue === 'true') {
        this.tasks = this.complitedTask.filter(task => task.complite === true)
      } else {
        this.tasks = this.saveTasks.filter(task => task.complite === false)
      }

    },
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

button {
  border: 0;
}

/* class styles */
.list {
  width: 50%;
}

/* main styles */

.mainContainer {
  background: linear-gradient(#0cb980, #027f88);

}


header {
  margin: 25px 0;

  font-weight: bold;
  font-size: 24px;
}

h1 {
  margin: 0 auto;
  text-align: center;
}

main {
  width: 960px;
  min-height: 800px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 50px 50px 0;

}

/* form styles */

.completed {
  background-color: lightgoldenrodyellow;
}

.profile {
  display: flex;
  flex-direction: column;
}

.activeTask,
.deactiveTask {
  margin-bottom: 23px;
  font-size: 16px;
  color: #333;
}



.d-flex input[type='text'] {
  margin-bottom: 20px;
}



::placeholder {
  color: #8c8c8c;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}


/* form styles end */


.tasks{
  width: 50%;
}

.completed {
  background: #c6eba1 !important;
}


#activeButton {
  width: 70px;
  height: 30px;
  background-color: green;
  align-self: center;
}
</style>