<template>
  <div>

    <div class="container">
      <header>
        <h1>To do List</h1>
      </header>

    </div>
    <div class="container">
      <div class="row">
        <div class="col align-items-center">
          <h2>Новая задача</h2>
        </div>
        <div class="col selectDiv">
          <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list d-flex fd-column margin-auto">
        <task-form @create="createTask"></task-form>
        <task-list :tasks="tasks" @remove="removeTask" @complite="compliteTask" v-if="!isTaskLoading"></task-list>
        <div v-else>Идет загрузка задач...</div>
      </div>
    </div>


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
      isTaskLoading: false,
      complitedTask: [],
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
      localStorage.setItem('tasksList', JSON.stringify(this.tasks));
    },

    removeTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
      localStorage.setItem('tasksList', JSON.stringify(this.tasks));
    },

    compliteTask(task) {
      let id = task.id
      this.tasks.find(task => {
        if (task.id === id) task.complite = true;
      })
      localStorage.setItem('tasksList', JSON.stringify(this.tasks));

      // this.complitedTask.push(task)
      // this.removeTask(task)
      // localStorage.setItem('compliteTasks', JSON.stringify(this.complitedTask))
    }



  },

  mounted() {
    if (localStorage.getItem('tasksList') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('tasksList'));
    }
  },

  watch: {
    selectedSort(newValue) {
      console.log(newValue)
      if (newValue === 'true') {
        this.tasks = this.tasks.filter(task => task.complite === Boolean(newValue))
      } else {
        this.tasks = JSON.parse(localStorage.getItem('tasksList'))
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

.d-flex {
  display: flex;
}

.d-flex h2 {
  color: #333;
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 30px;
}

.jc-center {
  justify-content: center;
}

.jc-sb {
  justify-content: space-between;
}

.fd-column {
  flex-direction: column;
}

.fd-row {
  flex-direction: row;
}

.margin-auto {
  margin: 0 auto;
}

/* main styles */

.mainContainer {
  background: linear-gradient(#0cb980, #027f88);

}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;

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

/* #title {
  height: 7vh;
  width: 35vw;

} */




/* form styles end */


.completed {
  background: #c6eba1 !important;
}


#activeButton {
  width: 70px;
  height: 30px;
  background-color: green;
  align-self: center;
}




/* The slider */

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196F3;
  -webkit-transition: .4s;
  transition: .4s ease-out;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 2px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}



/* Rounded sliders */

.slider.round {
  border-radius: 50px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>