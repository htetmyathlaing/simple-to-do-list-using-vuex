<template>
  <div class="list-item-container" @click="toggleDone">
    <label :class="task.done? 'finished': 'not-finished'">{{ task.name }}</label>
    <span class="delete" @click="deleteTask()">&times;</span>
  </div>
</template>
<script>
import ToDoItem from './ToDoItem.vue'
export default {
  props: {
    task: {
      required: true
    },
  },
  methods: {
    toggleDone() {
      this.$emit('toggleDone', this.task.id)
    },
    deleteTask() {
      console.log("From ToDoItem, emits event to parent:ToDoList")
      this.$emit('deleteTask', this.task.id)
    }
  }
}
</script>
<style scoped>
.list-item-container {
  padding: 1em;
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(51, 142, 245, 0);
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.list-item-container:hover {
  border: 1px solid rgba(51, 142, 245, 0.5);
}
.delete {
  color: red;
  font-weight: bold;
}
.delete:hover {
  cursor: pointer;
  transform: scale(1.5);
  transition: transform 0.3s;
}

.finished {
  color: red;
  text-decoration: line-through;
  transition: all 0.3s;
}
.not-finished {
  transform: scale(1.1);
  transition: all 0.3s;
}
</style>