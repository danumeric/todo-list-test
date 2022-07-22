<template>
  <div class="task" :class="classOfTask">
    <div class="task__checkbox" @click="this.changeDone(task.id)"></div>
    <div class="task__text">
      <span>{{ task.description }}</span>
    </div>
    <div class="task__text" :class="classOfStatus">
      <span>{{ task.isDone ? "Выполнено" : "В работе" }}</span>
    </div>
    <div class="task__text">
      <span>{{ task.creationDateStr }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TaskComp",
  data() {
    return {};
  },
  props: {
    task: Object,
  },
  methods: {
    ...mapMutations(["changeDone"]),
  },
  computed: {
    classOfTask: function () {
      return this.task.isDone ? "task_performed" : "task_unperformed";
    },
    classOfStatus: function () {
      return this.task.isDone
        ? "task__text_performed"
        : "task__text_unperformed";
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  display: grid;
  height: 58px;
  align-items: center;
  grid-template-columns: 80px auto 150px 130px;
  &__checkbox {
    justify-self: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
  &_unperformed .task__checkbox {
    border: 1px solid #16191d;
  }
  &_performed {
    background-color: #f6f9ff;
    .task__checkbox {
      background: url(@/assets/icons/check-ico.svg) 50% 50% no-repeat;
      border: 1px solid #134ec1;
      box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
    }
  }
  &__text {
    margin: 0px 0px 0px 20px;
    font-family: "Vela Sans", sans-serif;
    font-size: 14px;
    color: #16191d;
    &_performed {
      color: #134ec1;
    }
    &_unperformed {
      color: #f89b11;
    }
  }
}
</style>