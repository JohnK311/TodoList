<template>
  <input type="text" :value="modelValue" @input="updateInput" class="form-control form-control-lg">
</template>

<script>
export default {
  name: 'my-input',


  props: {
  modelValue:[String, Number]
  
},

methods: {
  updateInput(event){
        this.$emit('update:modelValue',event.target.value)
  }
}
}
</script>

<style>
/* input[type='text']{
  width: 100%;
  height: 50px;
  margin: 5px 0;
  border: 1px solid #8c8c8c;
  border-radius: 10px;
  padding: 10px;
  color: #333333;
  font-size: 16px;
  outline: none;
  resize: vertical;

} */
</style>