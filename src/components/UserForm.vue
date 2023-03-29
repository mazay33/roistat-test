<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div @click="$emit('closeForm')" class="form__close">x</div>
    <h2>Добавление пользователя</h2>
    <div class="form__field">
      <label> Имя </label>
      <input type="text" v-model="name" />
    </div>
    <div class="form__field">
      <label> Номер </label>
      <input type="text" v-model="number" />
    </div>
    <div class="form__field">
      <label> Начальник </label>
      <select v-model="parent">
        <option value="">Без начальника</option>
        <option v-for="user in users" :key="user.name" :value="user">
          {{ user.name }}
        </option>
      </select>
    </div>
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserForm',
  data() {
    return {
      name: '',
      number: '',
      parent: '',
    }
  },
  computed: {
    ...mapState(['tableData']),
    users() {
      const users = []
      const addUsers = (data) => {
        data.forEach((user) => {
          users.push(user)
          if (user.children) {
            addUsers(user.children)
          }
        })
      }
      addUsers(this.tableData)
      return users
    },
  },
  methods: {
    ...mapActions(['ADD_USER']),

    handleSubmit() {
      const user = {
        name: this.name,
        number: this.number,
      }
      if (this.parent) {
        this.ADD_USER({
          user,
          parent: this.parent,
        })
      } else {
        this.ADD_USER({
          user,
          parent: null,
        })
      }

      this.name = ''
      this.number = ''
      this.parent = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.1);
  &__field {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  &__close{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 2px;
    padding: 5px;
  }
}
</style>
