<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div
        @dblclick="onDoubleClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{ 'todo--not': !todo.completed }"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDoubleClick: function(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
      console.log(updTodo);
    },
  },
  computed: { ...mapGetters(["allTodos"]) },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.todo--not {
  background-color: rgb(209, 58, 47);
}

i {
  color: white;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
