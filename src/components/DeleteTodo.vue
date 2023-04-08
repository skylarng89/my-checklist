<template>
  <!-- On click, emit the 'delete-todo' event to the parent component 'TodoList.vue' -->
  <button @click="$emit('delete-todo')" class="custom-btn">Delete</button>
</template>
  
<script>
  export default {};
</script>
  