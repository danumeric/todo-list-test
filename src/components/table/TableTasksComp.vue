<template>
  <div class="table-head">
    <div class="table-head__capture"></div>
    <div class="table-head__capture"><span>Описание</span></div>
    <div class="table-head__capture" ><span>Статус</span></div>
    <div class="table-head__capture"><span>Дата</span></div>
  </div>
  <div class="table-body">
    <div
      class="table-body__row"
      v-for="task in getFilteredTasks"
      :key="task.id"
    >
      <TaskComp :task="task" />
    </div>
  </div>
</template>
  <script>
import TaskComp from "@/components/table/TaskComp.vue";
import { mapGetters } from "vuex";

export default {
  name: "TableTasksComp",
  components: {
    TaskComp,
  },
  computed: {
    ...mapGetters(["getFilteredTasks"]),
  },
};
</script>
<style lang="scss" scoped>
.table-head {
  margin: 20px 0px 0px 0px;
  display: grid;
  align-items: center;
  grid-template-columns: 80px auto 150px 130px;

  &__capture {
    position: relative;
    height: 58px;
    font-family: "Vela Sans", sans-serif;
    font-size: 14px;
    color: #16191d;

    span {
      display: inline-block;
      line-height: 58px;
      margin: 0px 0px 0px 20px; //переделать
    }
    &:not(:first-child):before {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 32px;
      top: 6px;
      background: #c4c4c4;
    }
  }
}
.table-body {
  &__row {
    border-top: 1px solid #eeebe9;
    &:last-child {
      border-bottom: 1px solid #eeebe9;
    }
  }
}
</style>