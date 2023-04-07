// Set up the routing for the Todo App

// Import createRouter and createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

// Import the components to be used in the routes
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';

// Define the routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - myChecklist' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About - myChecklist' },
  },
];

// Create the router instance
const router = createRouter({
  // Create a history for the router and pass in the base URL
  history: createWebHistory(import.meta.env.BASE_URL),
  // Set the routes array that contains the route objects
  routes,
});

// Export the router instance for use in other parts of the app
export default router;
