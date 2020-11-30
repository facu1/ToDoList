<template>
  <div class="container shadow-5">
    <create-edit></create-edit>
    <q-list separator>
      <todo-item
        v-for="(item, key) in items"
        :item="item"
        :id="key"
        :key="key"
      ></todo-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  methods: {
    ...mapActions("store", ["getItems"]),
  },
  created() {
    this.getItems();
  },
  computed: {
    ...mapGetters("store", ["items"]),
  },
  components: {
    "todo-item": require("../components/TodoItem.vue").default,
    "create-edit": require("../components/AddItem.vue").default,
  },
};
</script>