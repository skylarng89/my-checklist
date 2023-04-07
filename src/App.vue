<template>
  <div>

    <!-- Set navigation links using the 'router-link' tag -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <!-- Load the content of the routed component using 'router-view'-->
    <router-view></router-view>

    <!-- Load the footer component -->
    <Footer />
  </div>
</template>

<script>
// Import the footer component
import Footer from "./components/Footer.vue";

export default {
  // Set the name of the app
  name: "App",
  // Register components to be used in this file
  components: {
    Footer
  },
  // The watch property sets up a watcher for the $route property, and sets the browser page title on route change to the 'to.meta.title' or set it to "myChecklist" if the meta title is not defined.
  watch: {
    $route(to) {
      document.title = to.meta.title || "myChecklist";
    },
  },
  // This hook runs when the 'App' component is created and sets the 'meta.title' or sets it to "myChecklist" if 'meta.title' is not defined.
  created() {
    document.title = this.$route.meta.title || "myChecklist";
  },
};
</script>
