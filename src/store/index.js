import { createStore } from "vuex";

export default createStore({
  state: {
    nameTask: '',
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  },
  mutations: {

    updateNameTask(state, nameTask){
      state.nameTask = nameTask
    },

    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    updateTask(state, updatedTask) {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1, updatedTask);
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    clearForm(state){
      state.nameTask = '';
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit("addTask", task);
    },
    removeTask({ commit }, taskId) {
      commit("deleteTask", taskId);
    },
    modifyTask({ commit }, updatedTask) {
      commit("updateTask", updatedTask);
    },
  },
});
