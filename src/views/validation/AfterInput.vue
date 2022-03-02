<template>
  <form
    novalidate
    @submit="onSubmit"
  >
    <div
      class="form-field"
      :class="{ 'form-field--error': !!emailError }"
    >
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        @blur="emailTouched = true"
      />
      <div class="form-field__hints">{{ emailError }}</div>
    </div>
    <button type="submit" :disabled="!isFormValid">
      subscribe to newsletter
    </button>
  </form>
</template>

<script>
// it's just an example - do not test email like this!
const isEmailValid = (email) => email && email.includes('@')

export default {
  data() {
    return {
      email: '',
      emailTouched: false,
    }
  },
  computed: {
    emailError() {
      if (!this.emailTouched) return ''
      if (!this.email) {
        return 'Email is required'
      }
      if (!isEmailValid(this.email)) {
        return 'Email should have "@" character'
      }
      return ''
    },
    isFormValid() {
      return !this.emailError
    }
  },
  methods: {
    touchAll() {
      this.emailTouched = true
    },
    onSubmit(event) {
      event.preventDefault()
      this.touchAll()
      if (this.isFormValid) {
        // do something...
        alert('> done!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  text-align: left;
  width: 400px;
  margin: 0 auto;
}
input, button {
  width: 100%;
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

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
}

.form-field {
  padding: 10px 0;
}
.form-field__hints {
  height: 1.4em;
  line-height: 1.4em;
  font-size: 0.9rem;
}

.form-field--error {
  input {
    border-color: red;
  }
  .form-field__hints {
    color: red;
  }
}
</style>
