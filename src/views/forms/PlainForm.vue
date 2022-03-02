<template>
  <form>
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
        <button type="submit">
          submit form
        </button>
      </li>
    </ul>
  </form>
</template>

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
