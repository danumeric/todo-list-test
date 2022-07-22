import { createStore } from 'vuex'
import tasks from './modules/tasks'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    tasks
  }, plugins: [createPersistedState()],
})
