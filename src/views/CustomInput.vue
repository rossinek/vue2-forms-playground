<template>
  <div>
    <BaseInput v-model="name" label="Name" />
    <pre>{{ name }}</pre>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      name: ''
    }
  },
}
</script>
