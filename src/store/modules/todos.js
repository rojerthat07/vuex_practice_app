import axios from "axios";
const state = {
  todos: [],
};
const getters = { allTodos: (state) => state.todos };
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
    console.log(response.data);
  },
  async addTodo({ commit }, title) {
    const respose = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false } // sending data to api
    );

    commit("newTodo", respose.data);
  },
  async deleteTodo({ commit }, id) {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => console.log("successfuly deleted"));
    console.log("delete action");
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, limit) {
    const limitRelease = parseInt(
      limit.target.options[limit.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limitRelease}`
    );

    commit("filteringTodo", response.data);
  },
  async updateTodo({ commit }, uptdTodo) {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${uptdTodo.id}`
    );
    commit("clickUpdateTodo", uptdTodo);
  },
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  filteringTodo: (state, todo) => {
    state.todos = todo;
  },
  clickUpdateTodo: (state, uptdTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === uptdTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, uptdTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
