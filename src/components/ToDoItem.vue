<template>
  <div class="list-item-container">
    <input type="checkbox" :id="'check'+task.id" :checked="task.done" @click="toggleDone(task.id)" />

    <label :for="'check'+task.id" :class="task.done? 'finished': 'not-finished'">{{ task.name }}</label>
    <span class="delete" @click="deleteTask(task.id)">&times;</span>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import useDeleteTask from "./../compositions/useDeleteTask";
import { ref, reactive, toRefs, onUnmounted } from "@vue/composition-api";
export default {
  setup(props, context) {
    console.log("Props :", props);
    const deleteTask = useDeleteTask(context);
    const testRef = ref("Test Ref");
    const testReactive = reactive({
      option1: "Option 1",
      option2: "Option 2",
      netest: {
        test: "Data"
      }
    });
    onUnmounted(() => {
      console.log("ToDoItem unmounted", context.parent);
    });
    return { deleteTask, testRef, ...toRefs(testReactive) };
  },
  props: {
    task: {
      required: true
    }
  },
  methods: {
    ...mapMutations(["toggleDone"])
  }
};
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
  border: 1px solid rgba(51, 142, 245);
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
input:hover,
label:hover {
  cursor: pointer;
}
.finished {
  color: red;
  text-decoration: line-through;
  transition: all 0.3s;
}
.not-finished {
  color: green;
  transform: scale(1.1);
  transition: all 0.3s;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  display: none;
}

[type="checkbox"]:not(:checked) + label:before {
  content: "☐";
  font-size: 1.5em;
  margin-right: 5px;
  display: inline-block;
}
[type="checkbox"]:checked + label:before {
  content: "☑";
  font-size: 1.5em;
  margin-right: 5px;
  display: inline-block;
}
</style>