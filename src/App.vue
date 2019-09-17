<template>
  <div id="app">
    <div class="container">
      <FilterList @changeFilter="changeFilter" />
      <div class="todo">
        <TaskInput @addTask="addTask" />
        <ToDoList :to-do-list="filteredList" @deleteTask="deleteTask" @toggleDone="toggleDone" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue'
import ToDoList from './components/ToDoList.vue'
import FilterList from './components/FilterList.vue'
import { mapState } from 'vuex'
import { filter } from 'minimatch'
export default {
  name: 'app',
  components: {
    ToDoList,
    TaskInput,
    FilterList
  },
  data() {
    return {
      toDoList: [],
      filter: 'all'
    }
  },
  computed: {
    filteredList() {
      switch (this.filter) {
        case 'all':
          return this.toDoList
          break;
        case 'finished':
          return this.toDoList.filter(item => item.done == true)
          break;
        case 'unfinished':
          return this.toDoList.filter(item => item.done == false)
          break;

      }
    }
  },
  methods: {
    addTask(payload) {
      console.log("From App")
      this.toDoList.unshift({ id: this.toDoList.length + 1, name: payload, done: false })
    },
    toggleDone(payload) {
      this.toDoList.find(item => item.id == payload).done = !this.toDoList.find(item => item.id == payload).done
    },
    deleteTask(payload) {
      console.log("From App")
      this.toDoList = this.toDoList.filter(item => item.id != payload)
    },
    changeFilter(payload) {
      this.filter = payload
    }
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
