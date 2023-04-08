<template>
  <!-- A form for adding the todo item. The '@submit.prevent' event prevents the default form submission behaviour which causes a page reload. It also calls the 'onAddTodo' function in the script of this file -->
  <form @submit.prevent="onAddTodo" id="form-input">
    <!-- Bind the input field to the 'newTodo' data property. The '@input' event listener calls the 'clearError' method to remove the error message when the input value changes -->
    <input
      v-model="newTodo"
      placeholder="Add a todo"
      @input="clearError"
      maxlength="80"
    />
    <button type="submit" class="custom-btn">Add</button>
  </form>
</template>
  
<script>
  // Export configuration
  export default {
    data() {
      return {
        // Set a newTodo property to an empty string
        newTodo: "",

        // Set an errorMsg proeprty to an empty string
        errorMsg: "",
      };
    },
    methods: {
      // Check if trimmed 'newTodo' value is not empty and emit it to the 'add-todo' event with the trimmed value to the parent component, then clear the 'newTodo' value and an empty error message. Otherwise, emits the error event with an error message.
      onAddTodo() {
        const trimmedTodo = this.newTodo.trim();
        if (trimmedTodo) {
          this.$emit("add-todo", trimmedTodo);
          this.newTodo = "";
        } else {
          this.$emit("error", "Please enter a non-empty todo item.");
        }
      },
      clearError() {
        this.$emit("error", "");
      },
    },
  };
</script>

<style scoped>
  #form-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 640px;
  }
  #form-input input {
    width: 100%;
    max-width: 470px;
    height: 45px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 0 1rem;
    font-family: inherit;
    font-size: 1.2em;
    font-weight: 400;
  }
</style>