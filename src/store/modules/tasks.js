
export default ({
  state: {
    tasksDB: [
      {
        id: 0,
        isDone: true,
        description: 'Размещение новостей на сайте',
        creationDate: new Date("2022-04-22").getTime(),
      },
      {
        id: 1,
        isDone: false,
        description: 'Внедрить Wi-fi для читателей',
        creationDate: new Date("2022-03-25").getTime(),
      },
      {
        id: 2,
        isDone: true,
        description: 'Отредактировать раздел “Доступная среда”',
        creationDate: new Date("2022-03-15").getTime(),
      },
      {
        id: 3,
        isDone: false,
        description: 'Презентация “Информационные технологии”',
        creationDate: new Date("2022-03-15").getTime(),
      },
      {
        id: 4,
        isDone: false,
        description: 'Счётчики — внедрить дизайн',
        creationDate: new Date("2022-03-09").getTime(),
      },
      {
        id: 5,
        isDone: false,
        description: 'Сверстать новый layout',
        creationDate: new Date("2022-03-07").getTime(),
      },
      {
        id: 6,
        isDone: true,
        description: 'Скролл в новостях',
        creationDate: new Date("2022-03-01").getTime(),
      },
      {
        id: 7,
        isDone: false,
        description: 'Форма сброса пароля',
        creationDate: new Date("2022-02-25").getTime(),
      },
      {
        id: 8,
        isDone: true,
        description: 'Внедрение модуля Chat',
        creationDate: new Date("2022-02-20").getTime(),
      }
    ],
    filterText: "",
    sortedBy: "byDate",
  },

  getters: {
    getSortedBy(state) {
      return state.sortedBy;
    },
    getFilteredTasks(state) {
      const tasks = state.tasksDB.slice();
      for (let t of tasks) {//приведение timestamp к строке для вывода в элементе
        const date = new Date(t.creationDate)
        const year = date.getFullYear();
        const month =
          +date.getMonth() < 10
            ? "0" + (+date.getMonth() + 1)
            : +date.getMonth() + 1;
        const day =
          +date.getDate() < 10
            ? "0" + date.getDate()
            : date.getDate();
        t.creationDateStr = `${day}.${month}.${year}`;
      }

      const tasksFiltered = tasks.filter(t => {
        if (!state.filterText) return true;
        if (t.description.toLowerCase().includes(state.filterText.toLowerCase())) return true;
      });

      const tasksSorted = tasksFiltered.sort((a, b) => {
        if (state.sortedBy === 'byStatus') {
          if (a.isDone < b.isDone) return -1;
          if (a.isDone > b.isDone) return 1;
          if (a.isDone === b.isDone) {
            if (a.creationDate < b.creationDate) return 1;
            if (a.creationDate > b.creationDate) return -1;
          }
        }
        if (state.sortedBy === 'byDate') {
          if (a.creationDate < b.creationDate) return 1;
          if (a.creationDate > b.creationDate) return -1;
        }
      })
      return tasksSorted
    }

  },

  mutations: {
    addTasksDB(state, descrNewTask) {
      const newId = +state.tasksDB[state.tasksDB.length - 1].id + 1;
      state.tasksDB.push(
        {
          id: newId,
          isDone: false,
          description: descrNewTask,
          creationDate: new Date().getTime(),
        },

      );
    },
    changeDone(state, id) {
      const changedTask = state.tasksDB.find(task => task.id === id);
      changedTask.isDone = !changedTask.isDone;
    },
    updateFilterText(state, newFilterText) {
      state.filterText = newFilterText
    },
    updateSortedBy(state, newSortedBy) {
      state.sortedBy = newSortedBy;
    },

  },
  actions: {
  },

})