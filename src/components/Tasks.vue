<template>
  <div class="container">
    <div class="top-buttons">
      <input
        type="text"
        class="input"
        placeholder="Добавьте новую задачу"
        v-model="todoInput"
        @keyup.enter="addTask(todoInput)"
      />
      <button class="button-add" @click="addTask(todoInput)">
        <img class="button-add__icon" src="@/assets/add.svg" alt="" />
      </button>
    </div>

    <div class="tasks">
      <li class="tasks__item" v-for="(task, index) in tasks" :key="task.index">
        <template v-if="indexOfEditigTask !== index">
          <div
            :class="['tasks__item-content', { 'finished-task': task.isDone }]"
            @click="CHANGE_TASK_STATUS(index)"
          >
            <span> {{ task.text }} </span>
          </div>

          <button class="tasks__item-btn" @click="enableEditing(index)">
            <img style="width: 30px" src="@/assets/edit.svg" alt="" />
          </button>
          <button class="tasks__item-btn" @click="REMOVE_TASK(index)">
            <img style="width: 30px" src="@/assets/delete.svg" alt="" />
          </button>
        </template>

        <div v-else class="tasks__edit">
          <textarea
            v-model="newValue"
            class="tasks__edit-input"
            rows="10"
            @keyup.enter="saveChanges(task)"
          ></textarea>
          <button class="tasks__edit-btn" @click="cancelChanges()">
            Отмена
          </button>
          <button class="tasks__edit-btn" @click="saveChanges(index)">
            Сохранить
          </button>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Tasks",
  data() {
    return {
      todoInput: "",
      indexOfEditigTask: null,
      newValue: null,
    };
  },
  computed: mapState(["tasks"]),

  watch: {
    tasks: {
      handler() {
        this.UPDATE_LOCAL_STORAGE_ITEM();
      },
      deep: true,
    },
  },

  methods: {
    ...mapMutations([
      "REMOVE_TASK",
      "CHANGE_TASK_STATUS",
      "UPDATE_TASK",
      "UPDATE_LOCAL_STORAGE_ITEM",
    ]),

    addTask() {
      if (!this.todoInput) return;

      this.$store.dispatch("addTask", this.todoInput);
      this.todoInput = "";
    },
    enableEditing(index) {
      this.indexOfEditigTask = index;
      this.newValue = this.$store.state.tasks[index].text;
    },
    cancelChanges() {
      this.indexOfEditigTask = null;
    },
    saveChanges(index) {
      this.indexOfEditigTask = null;
      this.UPDATE_TASK({ index, newValue: this.newValue });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
  max-width: 1000px;
  width: calc(100% - 40px);
}
.input {
  padding: 5px 10px;
  background-color: #081122;
  border: none;
  height: 55px;
  border-radius: 10px;
  color: white;
  flex-grow: 2;
}

.button-add {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  padding-left: 10px;
  cursor: pointer;
  &__icon {
    height: 30px;
  }
}

.top-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 40px;
}

.tasks {
  margin-top: 40px;
  &__item {
    margin-bottom: 10px;
    list-style: none;
    display: flex;
    align-items: center;
  }

  .finished-task {
    background-color: green;
    text-decoration: line-through;
  }

  &__item-content {
    background-color: #081122;
    color: white;
    width: 100%;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 14px 14px;
  }

  &__item-btn {
    background: none;
    border: none;
    line-height: 1;
    margin-left: 10px;
    cursor: pointer;
  }

  &__edit {
    display: flex;
    width: 100%;
    align-items: center;
  }

  &__edit-input {
    padding: 5px 10px;
    background-color: #081122;
    border: none;
    border-radius: 10px;
    color: white;
    flex-grow: 2;
  }

  &__edit-btn {
    padding: 5px;
    margin-left: 20px;
    margin-right: 10px;
    background: none;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    width: 60px;
  }
}
</style>
