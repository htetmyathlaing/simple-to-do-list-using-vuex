export default (context) => {
    const deleteTask = (payload) => {
        context.parent.$store.commit('deleteTask', payload)
    }
    return deleteTask
}