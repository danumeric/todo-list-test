<template>
  <div class="header">
    <div class="header__flex-cont">
      <h1 class="header__caption">To do list</h1>
      <div @click="showAddTask" class="header__add">
        <div class="header__cross"></div>
        <div class="header__cross_rotated"></div>
      </div>
    </div>
    <div class="header__flex-cont header__flex-cont_second">
      <form class="header__search">
        <input
          type="text"
          v-model="filterText"
          placeholder="Поиск ID, Имени, статуса или даты"
        />
      </form>
      <div class="header__sort">Сортировать по:</div>
      <div class="header__dropdown-wrapper">
        <div class="header__sorted-by">{{ shownSortedBy }}</div>
        <div class="header__dropdown" v-if="isShowDropdown">
          <div
            @click="changeSortedBy"
            class="header__sorted-by header__sorted-by_menu"
          >
            {{ dropdownSortedBy }}
          </div>
        </div>
      </div>

      <div class="header__uncover" @click="toggleDropdown">
        <img src="@/assets/icons/uncover-ico.svg" alt="uncover" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HeaderComp",
  data() {
    return {
      filterText: "",
      isShowDropdown: false,
    };
  },
  emits: ["toggleAddTask"],

  methods: {
    ...mapMutations(["updateFilterText", "updateSortedBy"]),

    toggleDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
    },

    showAddTask() {
      this.$emit("toggleAddTask", true);
    },

    changeSortedBy() {
      if (this.getSortedBy === "byDate") {
        this.isShowDropdown = false;
        this.updateSortedBy("byStatus");
        return;
      }
      if (this.getSortedBy === "byStatus") {
        this.isShowDropdown = false;
        this.updateSortedBy("byDate");
        return;
      }
    },
  },
  computed: {
    ...mapGetters(["getSortedBy"]),
    shownSortedBy: function () {
      if (this.getSortedBy === "byDate") {
        return "Дата";
      }
      if (this.getSortedBy === "byStatus") {
        return "Статус";
      }
      return "Error in set sort";
    },
    dropdownSortedBy: function () {
      if (this.getSortedBy === "byDate") {
        return "Статус";
      }
      if (this.getSortedBy === "byStatus") {
        return "Дата";
      }
      return "Error in set sort";
    },
  },
  watch: {
    filterText: function () {
      this.updateFilterText(this.filterText);
    },
  },
  created: function () {
    //сброс поиска при перезагрузке
    this.updateFilterText(this.filterText);
  },
};
</script>

 <style scoped lang="scss">
.header {
  &__flex-cont {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0px 0px 0px 30px;
    &_second {
      margin: 30px 0px 0px 0px;
    }
  }

  &__caption {
    display: inline-block;
    flex: 1 0;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
  }
  &__add {
    position: relative;
    width: 40px;
    height: 40px;
    background: #d6dbeb;
    border-radius: 50%;
    cursor: pointer;
  }
  &__cross,
  &__cross_rotated {
    position: absolute;
    left: 47.5%;
    right: 47.5%;
    top: 25%;
    bottom: 25%;
    background: #314b99;
    &_rotated {
      transform: rotate(90deg);
    }
  }
  &__search {
    display: inline-block;
    flex: 1 0;
    input {
      background: url(@/assets/icons/search-ico.svg) no-repeat;
      padding: 0px 0px 0px 35px;
      width: 262px;
      height: 18px;
      font-family: "Vela Sans", sans-serif;
      font-size: 14px;
      &::placeholder {
        color: #c4c4c4;
      }
    }
  }
  &__sort {
    font-family: "Vela Sans", sans-serif;
    font-size: 14px;
    color: #16191d;
  }
  &__sorted-by {
    margin: 0px 0px 0px 15px;
    font-family: "Vela Sans", sans-serif;
    font-size: 14px;
    color: #16191d;
    &_menu {
      margin: 8px 0px 0px 0px;
      cursor: pointer;
    }
  }
  &__uncover {
    margin: 0px 0px 0px 5px;
    cursor: pointer;
    img {
      width: 12px;
      height: 6px;
      display: block;
      margin: auto 0;
    }
  }
  &__dropdown-wrapper {
    position: relative;
  }
  &__dropdown {
    position: absolute;
    right: 0;
  }
}
</style>
