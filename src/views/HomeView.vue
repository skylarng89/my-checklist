<template>
    <div>
        <h1>{{ pageTitle }}</h1>

        <!-- Add the 'AddTodo' component with custom event listeners '@add-todo' and '@error' emitted from the 'AddTodo' component -->
        <AddTodo @add-todo="addTodo" @error="setError" />

        <!-- Add the 'TodoList' component. The ':todos' prop list the todo items. The custom event listeners '@delete-todo' and '@update-todo' are emitted from this file -->
        <TodoList :todos="todos" @delete-todo="deleteTodo" @update-todo="updateTodo" />

        <!-- Conditionally display an error message under the input field -->
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </div>
</template>
  
<script>
// Import components to use in this file
import AddTodo from "../components/AddTodo.vue";
import TodoList from "../components/TodoList.vue";

// Export the config of this file
export default {
    // Register the components in use in this file
    components: {
        AddTodo,
        TodoList
    },
    // Set data object to return all reactive properties
    data() {
        return {
            // Gets the todos from local storage, or an empty array if local storage is empty
            todos: JSON.parse(localStorage.getItem("todos") || "[]"),

            // Set an empty string to store error message
            errorMsg: "",
            pageTitle: 'myChecklist'
        };
    },
    methods: {
        // Funtion to add a todo and save to the local storage
        addTodo(todo) {
            this.todos.push(todo);
            this.saveTodosToLocalStorage();
        },
        // Delete a todo from the todos array based on the index and save the updated array to the local storage
        deleteTodo(index) {
            this.todos.splice(index, 1);
            this.saveTodosToLocalStorage();
        },
        // Update a todo in the todos array based on the index and new text and saves the updated array to local storage
        updateTodo({ index, updatedText }) {
            this.todos.splice(index, 1, updatedText);
            this.saveTodosToLocalStorage();
        },
        // Sets the errorMessage data property with the provided error message
        setError(error) {
            this.errorMsg = error;
        },
        // Save the todos to local storage as strings
        saveTodosToLocalStorage() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    }
};
</script>
  
<style>
.error {
    color: red;
}
</style>
  