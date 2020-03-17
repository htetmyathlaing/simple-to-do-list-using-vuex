<template>
  <div id="app">
    <div class="container">
      <FilterList />
      <RightList :filtered-list="filteredList" />
    </div>
  </div>
</template>


<script>
import TaskInput from "./components/TaskInput.vue";
import ToDoList from "./components/ToDoList.vue";
import FilterList from "./components/FilterList.vue";
import useToDoList from "./compositions/useToDoList";
import { ref, computed, onMounted } from "@vue/composition-api";
import { mapGetters } from "vuex";
import RightList from "./components/RightList";
export default {
  name: "app",
  setup(props, context) {
    console.log("Before beforeCreated hook");
    onMounted(() => {
      console.log("App Mounted", context);
    });
    const filteredList = useToDoList(context);
    const count = ref(1);
    const add = ref(0);
    const computedData = computed(
      () => `Updated Data: ${count.value + add.value}`
    );

    return { filteredList, count, computedData };
  },
  components: {
    ToDoList,
    TaskInput,
    FilterList,
    RightList
  },
  computed: {
    ...mapGetters(["filteredList"])
  },
  created() {
    console.log("At created hook");
    console.log("From created", this);
  }
};
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
