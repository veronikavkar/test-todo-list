<template>
  <Tasks />
</template>

<script>
import Tasks from "@/components/Tasks.vue";
export default {
  name: "TasksPage",
  components: { Tasks },
  mounted() {
    this.$store.dispatch("initLocalStorage");
  },
};
</script>
