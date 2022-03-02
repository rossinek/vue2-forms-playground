<template>
  <div id="app">
    <nav>
      <router-link to="/plain-form">plain form</router-link> |
      <router-link to="/plain-form-with-events">plain form with events</router-link> |
      <router-link to="/two-way-binding">two-way binding</router-link> |
      <router-link to="/custom-input">custom input</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
