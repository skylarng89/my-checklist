<template>
  <div>
    <!-- Bind the input value to the 'updatedTodo' data property. The '@blur' and '@keyup.enter' event listeners save the input when the input field loses focus or the user presses the enter key respectively. -->
    <input v-model="updatedTodo" @blur="onSaveTodo" @keyup.enter="onSaveTodo" />

    <!-- Conditionally display an error message if the user tries to save an empty todo item -->
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
  </div>
</template>
  
<script>
  export default {
    // Create a prop called 'todos' coming from the parent component 'HomeView.vue'
    props: ["todo"],

    // Set a data method
    data() {
      return {
        // Initializes the updatedTodo with the value of the todo prop
        updatedTodo: this.todo,

        // Initializes an empty string to store any error message
        errorMsg: "",
      };
    },
    methods: {
      // Check if trimmed 'updatedTodo' value is not empty and emit it to the 'save-todo' event with the trimmed value to the parent component, then clear the error message. Otherwise, set the 'errorMsg'.
      onSaveTodo() {
        const trimmedTodo = this.updatedTodo.trim();
        if (trimmedTodo) {
          this.$emit("save-todo", trimmedTodo);
          this.errorMsg = "";
        } else {
          this.errorMsg = "Please enter a non-empty todo item.";
        }
      },
    },
  };
</script>
  
<style>
  .error {
    color: red;
    font-size: 0.8em;
    margin-top: 2px;
  }
</style>
  