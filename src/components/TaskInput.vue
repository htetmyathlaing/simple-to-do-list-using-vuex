<template>
  <input type="text" placeholder="Enter Task" v-model="task" @keydown.enter="addTask" />
</template>
<script>
export default {
  name: "",
  data() {
    return {
      task: ""
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.task);
      this.task = "";
    }
  }
};
</script>
<style scoped>
input {
  padding: 1em;
  width: 100%;
  margin: 5px 5px 0 5px;
  border: 1px solid purple;
}
input:focus {
  outline: none;
}
</style>