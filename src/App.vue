<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Chart Test</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/line">Line</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/stock">Stock</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/map">Map</a>
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

</style>
