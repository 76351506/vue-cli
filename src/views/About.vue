<template>
  <div class="about">
    <h1>{{ name }}</h1>
  </div>
</template>
<script>
// import { useStore } from "vuex";
// import { computed } from "vue";

export default {
  mounted() {
    console.log(this.$store.state.app.name)
  },
  computed: {
    name() {
      return this.$store.state.app.name
    },
  },
}
</script>
