<template>
  <div v-if="isShowAddTask" class="wrapper-add-task">
    <AddTaskComp @toggleAddTask="(isShow) => closeModal(isShow)" />
  </div>
  <div class="container">
    <HeaderComp @toggleAddTask="(isShow) => openModal(isShow)" />
    <TableTasksComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/header/HeaderComp.vue";
import TableTasksComp from "@/components/table/TableTasksComp.vue";
import AddTaskComp from "@/components/addTask/AddTaskComp.vue";

export default {
  name: "MainView",
  data() {
    return {
      isShowAddTask: false,
    };
  },
  components: {
    HeaderComp,
    TableTasksComp,
    AddTaskComp,
  },
  methods: {
    openModal(isShow) {
      const widthWithScroll = document.documentElement.clientWidth;
      this.isShowAddTask = isShow;
      document.body.style.overflow = "hidden";
      const widthWithoutScroll = document.documentElement.clientWidth;
      if (widthWithScroll < widthWithoutScroll) {
        document.body.style.paddingRight =
          widthWithoutScroll - widthWithScroll + "px";
      }
    },
    closeModal(isShow) {
      this.isShowAddTask = isShow;
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0px";
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 100px 150px 100px 150px;
}
.wrapper-add-task {
  height: 100vh;
  width: calc(100vw - 25px);
  position: absolute;
  z-index: 2;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
}
</style>
