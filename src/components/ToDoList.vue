<template>
  <div class="list-container">
    <h3 v-show="toDoList.length==0">No Task!</h3>
    <ul>
      <transition-group name="fade">
        <li v-for="task in toDoList" :key="task.id">
          <ToDoItem :task="task" @deleteTask="deleteTask" @toggleDone="toggleDone" />
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
import ToDoItem from './ToDoItem.vue'
export default {
  components: {
    ToDoItem,
  },
  props: {
    toDoList: {
      required: true
    }
  },
  methods: {
    toggleDone(payload) {
      this.$emit('toggleDone', payload)
    },
    deleteTask(payload) {
      console.log("From ToDoList, emits event to parent:App")
      this.$emit('deleteTask', payload)
    }
  }
}
</script>
<style scoped>
.list-container {
  width: 100%;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-right: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
 