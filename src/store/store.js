// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    TOGGLE_TASK(state, taskId) {
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.done = !task.done;
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    toggleTask({ commit }, taskId) {
      commit('TOGGLE_TASK', taskId);
    }
  },
  getters: {
    tasks(state) {
      return state.tasks;
    }
  }
});

export default store;
