<template>
  <div class="content">
    <div class="content__left">
      <button @click="isShowForm = !isShowForm">Добавить</button>
      <Table />
    </div>
    <div class="content__right">
      <transition name="fade">
        <div v-if="isShowForm">
          <UserForm @closeForm="() => isShowForm = false" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Table from './components/Table.vue'
import UserForm from './components/UserForm.vue'
export default {
  name: 'App',
  components: {
    Table,
    UserForm,
  },
  data() {
    return {
      isShowForm: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 50px 100px 0 100px;
  @media screen and (max-width: 1180px) {
    flex-direction: column;
    padding: 20px 10px 0 10px;
}
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    & button {
      padding: 10px 20px;
      border-radius: 20px;
    }
  }
  &__right {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
