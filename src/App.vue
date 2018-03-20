<template>
  <div id="app" class="container">
    <img src="./assets/tcrss-logo.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 30%;
}

.top-to-bottom {
  border-right: 2px solid;
  -webkit-border-image:
  -webkit-gradient(linear, 0 0, 0 100%, from(rgb(34, 115, 102)), to(rgba(0, 0, 0, 0))) 1 100%;
-webkit-border-image:
  -webkit-linear-gradient(rgb(34, 115, 102), rgba(0, 0, 0, 0)) 1 100%;
-moz-border-image:
  -moz-linear-gradient(rgb(34, 115, 102), rgba(0, 0, 0, 0)) 1 100%;
-o-border-image:
  -o-linear-gradient(rgb(34, 115, 102), rgba(0, 0, 0, 0)) 1 100%;
border-image:
  linear-gradient(rgb(34, 115, 102), rgba(0, 0, 0, 0)) 1 100%;
}
</style>
