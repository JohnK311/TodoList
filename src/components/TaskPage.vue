<template>
  <div>
    <div class="container-xl">
      <header>
      <h1><router-link to="/" class="custom-link">To do List</router-link></h1>
      </header>
    </div>
    <section>
      <div class="container-xl d-flex flex-lg-column align-items-center">
        <div class="list col">
          <task-form></task-form>
        </div>
    </div>
      <div class="container-xl d-flex flex-lg-column align-items-center">
        <div class="col tasks">
          <task-list></task-list>
        </div>
      </div>

    </section>


  </div>
</template>

<script>
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'
import TaskItem from './TaskItem.vue'

export default {
  components: {
    TaskForm,
    TaskList,
    TaskItem,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


button {
  border: 0;
}

.list {
  width: 50%;
}

header {
  margin: 25px 0;
  font-weight: bold;
  font-size: 24px;
}

.custom-link{
  color: black;
  text-decoration: none;
}

h1 {
  margin: 0 auto;
  text-align: center;
}

h2 {
  margin: 0 auto;
  text-align: center;
}

.tasks{
  width: 50%;
}

</style>