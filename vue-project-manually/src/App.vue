<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">dataBinding</router-link> |
    <router-link to="/dataBindingHtml">dataBindingHtml</router-link> |
    <router-link to="/dataBindingInput">dataBindingInput</router-link> |
    <router-link to="/dataBindingList">dataBindingList</router-link> |
    <router-link to="/eventpage">eventpage</router-link>
    <div>
      <router-view/>
    </div>
  </nav>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
