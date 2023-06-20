<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import TaskPage from './components/TaskPage.vue'

export default {
  components: {
    TaskPage
  },
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
</style>