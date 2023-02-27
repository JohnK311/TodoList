<template>
  <div>

    <div class="card mb-3 mt-3">
      <div class="card-body">
        <h3 class="card-title">{{ task.title }}</h3>
        <p class="card-text">{{ task.body }}</p>

        <my-button @click="$emit('remove', task)" style="background-color: red;">
          Удалить
        </my-button>

        <my-button @click="$emit('complite', task)" v-if="task.complite === false">
          Завершить
        </my-button>

        <my-button disabled @click="$emit('complite', task)" v-else>
          Завершить
        </my-button>

      </div>
    </div>



  </div>
</template>

<script>

export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.container {
  margin-top: 30px;
}
</style>