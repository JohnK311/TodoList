<template>
  <select name="" id="" :value="modelValue" @change="changeOption" class="form-select form-select-sm mb-3">

    <option value="" disabled>Выберите список задач</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: String,
    options: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style>

</style>