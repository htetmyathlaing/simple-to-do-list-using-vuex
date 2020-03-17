import { computed } from '@vue/composition-api'
export default ({ root: { $store } }) => {
    const filteredList = computed(() => $store.getters.filteredList)
    return filteredList
}