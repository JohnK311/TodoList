<template>
  <button class="btn btn-primary btn-lg">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>

.btn {
  background-color: #0cb980;
  border: #0cb980;
  font-size: 16px;
  margin: 0 5px;
}

.btn:hover{
  background-color: #248a68;
}


</style>