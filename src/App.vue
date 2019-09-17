<template>
  <div id="app">
    <div class="container">
      <FilterList />
      <div class="todo">
        <TaskInput />
        <ToDoList :to-do-list="filteredList" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue'
import ToDoList from './components/ToDoList.vue'
import FilterList from './components/FilterList.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    ToDoList,
    TaskInput,
    FilterList
  },
  computed: {
    ...mapGetters(['filteredList'])
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.container {
  display: grid;
  grid-template-columns: auto auto;
}
.todo {
  width: 30em;
}
</style>
