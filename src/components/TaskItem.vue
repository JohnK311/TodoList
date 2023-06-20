<template>
  <div>

    <div class="card mb-3 mt-3">
      <div class="card-body">
        <h3 class="card-title"></h3>
        <my-button style="background-color: red;">
          Удалить
        </my-button>

        <my-button >
          Завершить
        </my-button>

      </div>
    </div>



  </div>
</template>

<script>

export default {
computed: {
  activeTasks(){
      return this.$store.getters.activeTasks;
    },
}
}
</script>

<style>
.container {
  margin-top: 30px;
}
</style>