<template>
  <div>
    <!-- Bind the input value to the 'updatedTodo' data property. The '@blur' and '@keyup.enter' event listeners save the input when the input field loses focus or the user presses the enter key respectively. -->
    <input
      v-model="updatedTodo"
      @blur="onSaveTodo"
      @keyup.enter="onSaveTodo"
      class="edit-input"
    />

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
          this.errorMsg = "Did you just try adding an empty item?";
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
  .edit-input {
    width: 100%;
    max-width: 470px;
    height: 45px;
    border: 1px solid #4a4a4a;
    border-radius: 4px;
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1em;
    font-weight: 400;
  }
</style>
  