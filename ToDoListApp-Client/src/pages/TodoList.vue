<template>
  <div class="container shadow-5">
    <create-edit ></create-edit>
    <q-list separator>
      <todo-item v-for="(item, key) in items" :item="item" :id="key" :key="key"></todo-item>
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
  async created() {
    let url;
    if(process.env.NODE_ENV === 'production') {
      url = 'https://todosapp-api.herokuapp.com/api/items/';
    } else {
      url = 'http://localhost:5000/api/items/';
    }
    const res = await this.$axios.get(url);
    const arr = res.data.body;
    const items = {};
    arr.forEach(e => {
      items[e._id] = {
        text: e.text,
        state: e.state
      }
    });
    this.getItems(items);
  },
  computed: {
    ...mapGetters("store", ["items"]),
  },
  components: {
    "todo-item": require("../components/TodoItem.vue").default,
    "create-edit": require("../components/AddItem.vue").default,
  }
};
</script>