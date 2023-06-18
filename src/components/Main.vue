<template>
  <div class="main">
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
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  top: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 160px;
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
