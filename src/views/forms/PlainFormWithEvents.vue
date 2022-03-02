<template>
  <form @submit="onSubmit">
    <ul>
      <li>
        <input
          type="text"
          placeholder="Movie name"
          name="name"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="Category"
          name="category"
        />
      </li>
      <li>
        <button
          type="submit"
          @click="onClick"
        >
          submit form
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert('click')
    },
    onSubmit(event) {
      alert('submit')
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

input, textarea, button {
  width: 400px;
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  padding: 8px 4px;
}
</style>
