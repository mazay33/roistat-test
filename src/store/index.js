import { createStore } from 'vuex';

const store = createStore({
  state: {
    tableData: [
      { name: 'Мария', number: "+7 987 654 32 10", children: [
        { name: 'Саша', number: "+7 123 456 78 90", children: [
          { name: 'Андрей', number: "+7 977 341 75 08" }
        ]}
      ]},
      { name: 'Анна', number: "+7 987 654 32 10", children: [
        { name: 'Сергей', number: "+7 123 456 78 90" },
        { name: 'Георгий', number: "+7 987 654 32 10" }
      ]},
      { name: 'Владислав', number: "+7 123 456 78 90" }
    ],
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});

export default store;