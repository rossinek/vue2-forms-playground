<template>
  <form @submit="onSubmit">
    <ul>
      <li>
        <input
          v-model="movie.name"
          type="text"
          placeholder="Movie name"
        />
      </li>
      <li>
        <select v-model="movie.category">
          <option value="" disabled>Select category...</option>
          <option>Comedy</option>
          <option>Horror</option>
          <option>Romance</option>
          <option>Musical</option>
          <option>Kids</option>
        </select>
      </li>
      <li>
        <input
          v-model.number="movie.length"
          type="number"
          placeholder="Length"
        />
      </li>
      <li>
        <button type="submit">
          submit form
        </button>
      </li>
    </ul>

    <pre>{{ movie }}</pre>
  </form>
</template>

<script>
export default {
  data() {
    return {
      movie: {
        name: '',
        category: '',
        length: '',
      }
    }
  },
  methods: {
    onSubmit(event) {
      console.log({ ...this.movie })
      event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

input, textarea, button, select {
  width: 400px;
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  padding: 8px 4px;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;

  &:hover {
    background-color: #fdf6f6;
  }
}

button {
  background-color: #fdf0f0;
  cursor: pointer;
}

pre {
  width: 400px;
  text-align: left;
  margin: 0 auto;
}
</style>
