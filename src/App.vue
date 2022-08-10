<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><router-link to="/">High Sens Chart </router-link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/concepts">Concepts</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/stock">Stock</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/map">Map</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
  a {
    text-decoration: none;
    color: #818181;
  }
</style>
