<template>
  <div id="header-area">
    <!-- Set logo -->
    <div id="logo-area">
      <img src="../assets/app_logo.webp" alt="myChecklist" />
    </div>
    <!-- Set navigation links using the 'router-link' tag -->
    <div id="navbar">
      <ul id="main-menu">
        <li class="main-menu-item"><router-link to="/">Home</router-link></li>
        <li class="main-menu-item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  #header-area {
    height: 90px;
    margin: 0 auto 2rem;
    padding: 0.2rem 3rem;
    background-color: #323232;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  #main-menu {
    display: flex;
  }
  .main-menu-item {
    margin: 0 0.5rem;
  }
  .main-menu-item a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
  }
  .main-menu-item a:hover {
    color: #3eabeb;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
  }
</style>