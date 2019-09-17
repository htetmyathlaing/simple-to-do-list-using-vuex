<template>
  <div class="filters">
    <div>
      <input
        type="radio"
        name="show"
        id="all"
        :checked="filter=='all'? true:false"
        @change="changeFilter('all')"
      />
      <label for="all">Show All</label>
    </div>
    <div>
      <input
        type="radio"
        name="show"
        id="finished"
        :checked="filter=='finished'? true:false"
        @change="changeFilter('finished')"
      />
      <label for="finished">Finished</label>
    </div>
    <div>
      <input
        type="radio"
        name="show"
        id="unfinished"
        :checked="filter=='unfinished'? true:false"
        @change="changeFilter('unfinished')"
      />
      <label for="unfinished">Unfinished</label>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['filter'])
  },
  methods: {
    changeFilter(filter) {
      this.$store.commit('changeFilter', filter)
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