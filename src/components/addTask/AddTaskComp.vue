<template>
  <div class="add-task">
    <div class="add-task__header">
      <h2 class="add-task__capture">Создать новую задачу</h2>
      <button @click="hideAddTask()" class="add-task__close"></button>
    </div>
    <form @submit="this.addTask" class="add-task__form">
      <label class="add-task__label" for="descr">Описание</label>
      <input
        v-model="descrNewTask"
        required
        class="add-task__input"
        type="text"
        id="descr"
        placeholder="Введите описание"
      />
      <input type="submit" class="add-task__create-button" value="Создать" />
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      descrNewTask: "",
    };
  },
  emits: ["toggleAddTask"],
  methods: {
    ...mapMutations(["addTasksDB"]),
    hideAddTask() {
      this.$emit("toggleAddTask", false);
    },
    addTask(e) {
      e.preventDefault();
      this.addTasksDB(this.descrNewTask);
      this.hideAddTask();
    },
  },
};
</script>

<style lang="scss" scoped>
.add-task {
  position: absolute;
  top: calc(50% - 140px);
  left: calc(50% - 200px);
  margin-right: -50%;
  width: 400px;
  height: 280px;
  padding: 40px 40px 50px 40px;
  background: #ffffff;
  border: 1px solid #dde2e4;
  border-radius: 6px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  &__header {
    display: flex;
  }

  &__capture {
    display: inline-block;
    flex: 1 0;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 132%;
    color: #16191d;
  }

  &__close {
  }
  &__label {
    display: block;
    margin: 30px 0px 0px 0px;
    font-family: "AGAvantGardeCyr";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }
  &__input {
    display: block;
    margin: 5px 0px 0px 0px;
    width: 100%;
    padding: 11px 0px 11px 16px;
    font-family: "Vela Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #000000;
    background: #ffffff;
    border: 1px solid #dde2e4;
    border-radius: 8px;
    &::placeholder {
      opacity: 0.5;
    }
  }
  &__create-button {
    display: block;
    margin: 30px auto 0px auto;
    padding: 12px 40px;
    font-family: "Vela Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 132%;
    color: #314b99;
    background: #f0f5ff;
    border-radius: 8px;
    cursor: pointer;
  }
  &__close {
    position: relative;
    width: 22px;
    height: 22px;
    border-radius: 5px;
    background: #314b99;
    cursor: pointer;

    &:before,
    &:after {
      position: absolute;
      top: 10px;
      left: 8px;
      width: 7px;
      height: 1px;
      border-radius: 50%;
      transform: rotate(45deg);
      background: #ffffff;
      content: "";
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>