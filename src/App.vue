<template>
  <div id="app">
    <nav>
      <section>
        <h3>forms</h3>
        <router-link to="/forms/plain-form">plain form</router-link>
        <router-link to="/forms/plain-form-with-events">plain form with events</router-link>
        <router-link to="/forms/two-way-binding">two-way binding</router-link>
        <router-link to="/forms/custom-input">custom input</router-link>
      </section>

      <section>
        <h3>validation</h3>
        <router-link to="/validation/on-submit">on submit</router-link>
        <router-link to="/validation/while-typing">while typing</router-link>
        <router-link to="/validation/after-input">after input</router-link>
      </section>
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
  padding: 10px 10px 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  section {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }

  a {
    padding: 4px;
    font-weight: bold;
    color: #2c3e50;

    &:hover {
      text-decoration: none;
    }

    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
