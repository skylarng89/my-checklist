<template>
  <ul class="todo-list">
    <!-- Create a list element and use the v-for directive to loop through the 'todos' prop. Add the ':key' to keep track of each item in the loop -->
    <li v-for="(todo, index) in todos" :key="index" class="todo-item">
      <!-- Render the todo text if not in Edit mode -->
      <span v-if="!editing[index]" class="todo-item-inner">{{ todo }}</span>

      <!-- Render an input field for the todo item if in edit mode. '@save-todo' saves the edited text -->
      <EditTodo
        v-else
        :todo="todo"
        @save-todo="(updatedText) => onSaveTodo(index, updatedText)"
      />
      <div class="todo-action-btns">
        <!-- If in edit mode show a 'Save' text on the button, if not show 'Edit' -->
        <button @click="toggleEditing(index)" class="custom-btn">
          {{ editing[index] ? "Save" : "Edit" }}
        </button>

        <!-- Display a delete button for each todo item -->
        <DeleteTodo @delete-todo="onDeleteTodo(index)" />
      </div>
    </li>
  </ul>
</template>
  
<script>
  // Import components used in the file
  import EditTodo from "./EditTodo.vue";
  import DeleteTodo from "./DeleteTodo.vue";

  // Export configuration
  export default {
    // Create a prop called 'todos' coming from the parent component 'HomeView.vue'
    props: ["todos"],

    // Register components used in this file
    components: {
      EditTodo,
      DeleteTodo,
    },

    // Set data method
    data() {
      return {
        editing: {},
      };
    },
    // Create methods used in this file
    methods: {
      // Set the editing state for the current todo item index to false, emit the 'update-todo' event with the index and updated text to the parent component 'HomeView.vue'
      onSaveTodo(index, updatedText) {
        this.editing[index] = false;
        this.$emit("update-todo", { index, updatedText });
      },

      // Emit the 'delete-todo' event with the index to the parent component 'HomeView.vue'
      onDeleteTodo(index) {
        this.$emit("delete-todo", index);
      },

      // Toggle the edit state for the current todo item
      toggleEditing(index) {
        this.editing[index] = !this.editing[index];
      },
    },
  };
</script>

<style scoped>
  .todo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 640px;
    margin: 1rem auto;
  }
  .todo-list li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin: 0.5rem 0;
    background-color: #ffffff;
  }
  .todo-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .todo-item span {
    margin: 0 0 0 0.5rem;
  }
  .todo-item-inner {
    width: 55%;
    line-height: 1.7;
    padding: 0.5rem 0 0.5rem;
  }
  .todo-action-btns {
    padding: 0.5rem;
  }
</style>