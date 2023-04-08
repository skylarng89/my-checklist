<template>
  <div>
    <!-- Add 'Header' component -->
    <Header />
    <!-- Load the content of the routed component using 'router-view'-->
    <router-view id="content"></router-view>

    <!-- Load the footer component -->
    <Footer />
  </div>
</template>

<script>
  // Import components to use in file
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    // Set the name of the app
    name: "App",
    // Register components to be used in this file
    components: {
      Header,
      Footer,
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

<style>
  @import url("https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap");
  /* http://meyerweb.com/eric/tools/css/reset/ 
                                               v2.0 | 20110126
                                               License: none (public domain)
                                            */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    font-family: "Fuzzy Bubbles", "Comic Sans", Helvetica, sans-serif;
    line-height: 1;
    width: 100vw;
    max-width: 1240px;
    height: 100vh;
    margin: auto;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Custom styles */
  #app {
    width: 100%;
    margin: 0 auto;
    background-color: #f4f4f4;
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
  }
  .custom-btn {
    width: 120px;
    height: 45px;
    margin: 0 0.3rem;
    padding: 0 1rem;
    border: none;
    border-radius: 4px;
    background-color: #1686c3;
    color: white;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
  }
  .custom-btn:hover {
    background-color: #116796;
  }
</style>
