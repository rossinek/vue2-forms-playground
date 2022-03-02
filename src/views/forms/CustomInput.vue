<template>
  <div>
    <FancyInput v-model="name" label="Name" />
    <pre>{{ name }}</pre>
  </div>
</template>

<script>
import FancyInput from '@/components/FancyInput.vue'

export default {
  components: {
    FancyInput,
  },
  data() {
    return {
      name: ''
    }
  },
}
</script>
