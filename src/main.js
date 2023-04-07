// This is the entry point of the application

// Import 'createApp' function to create a new Vue instance
import { createApp } from 'vue'

// Import the root which is the 'App' component
import App from './App.vue'

// Import the router
import router from './router.js'

// Create a new Vue app instance and mount it to '#app' which is in the 'index.html' file, apply the router
createApp(App).use(router).mount('#app')
