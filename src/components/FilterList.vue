<template>
  <div class="filters">
    <div>
      <input type="radio" name="show" id="all" checked @change="changeFilter('all')" />
      <label for="all">Show All</label>
    </div>
    <div>
      <input type="radio" name="show" id="finished" @change="changeFilter('finished')" />
      <label for="finished">Finished</label>
    </div>
    <div>
      <input type="radio" name="show" id="unfinished" @change="changeFilter('unfinished')" />
      <label for="unfinished">Unfinished</label>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeFilter(filter) {
      this.$emit('changeFilter', filter)
    }
  }
}
</script>
<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3em;
}
.filters > div {
  margin: 0.5em;
}
label {
  margin-left: 5px;
}
input:hover,
label:hover {
  cursor: pointer;
}
</style>