<template>
  <div class="main">
    <div>
      <div class="main__top">
        <h3 class="top-text">Welcome to your</h3>
        <h1 class="bottom-text">ToDo List</h1>
      </div>
      <div class="main__bottom">
        <button
          @click="$router.push({ name: 'tasks' }).catch((err) => {})"
          class="main__btn"
        >
          <span>Добавить задачу</span>
        </button>
      </div>
    </div>
    <Calendar />
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
export default {
  components: { Calendar },
};
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  top: 0;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin-left: 160px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 151px;
  margin-left: 100px;
  flex-wrap: wrap;
  &__bottom {
    margin-top: 30px;
  }
  &__btn {
    color: white;
    border: none;
    border-radius: 25px;
    width: 200px;
    height: 45px;
    background-color: #ba9259;
    box-shadow: 17px 20px 14px -5px rgba(49, 54, 58, 0.56);
    cursor: pointer;
    span {
      font-size: 16px;
    }
  }
}
.top-text {
  color: white;
  font-size: 28px;
  padding-bottom: 13px;
}
.bottom-text {
  color: white;
  font-size: 70px;
  font-weight: 700;
}
</style>
