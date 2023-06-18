import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    UPDATE_LOCAL_STORAGE_ITEM(state) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    SET_TASK(state, taskText) {
      state.tasks.push({
        text: taskText,
        isDone: false,
      });
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    CHANGE_TASK_STATUS(state, index) {
      state.tasks[index].isDone = !state.tasks[index].isDone;
    },
    UPDATE_TASK(state, { index, newValue }) {
      state.tasks[index].text = newValue;
    },
  },
  actions: {
    addTask(context, taskText) {
      context.commit("SET_TASK", taskText);
    },
    initLocalStorage({ commit }) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      commit("SET_TASKS", tasks);
    },
  },
  modules: {},
});
