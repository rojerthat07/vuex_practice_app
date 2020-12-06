<template>
  <AddTodo></AddTodo>
  <filter-todos></filter-todos>
  <Todos></Todos>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,

    FilterTodos,
  },
};
</script>

<style>
.body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 110px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
