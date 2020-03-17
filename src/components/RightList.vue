<template>
  <div class="todo">
    <TaskInput />
    <ToDoList :to-do-list="filteredList" />
    {{ count }}
  </div>
</template>
<script>
import TaskInput from "./TaskInput";
import ToDoList from "./ToDoList.vue";
export default {
  components: {
    ToDoList,
    TaskInput
  },
  props: {
    filteredList: {
      require: true,
      type: Function
    }
  }
};
</script>