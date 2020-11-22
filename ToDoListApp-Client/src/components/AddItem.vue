<template>
  <div class="q-pa-md">
    <q-form 
      @submit.prevent="submitItem" 
      class="q-gutter-md">
      <div class="row">
        <div class="col">
          <q-input
            outlined
            v-model="text"
            label="New To Do!"
            class="q-pa-xs"/>
        </div>
        <div class="col-auto submit-button">
          <q-btn 
            label="Submit"
            type="submit"
            color="primary" />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      text: ''
    };
  },
  methods: {
    ...mapActions("store", ["createItem"]),
    async submitItem() {
      if (this.text.length) {
        const item = {
          text: this.text.trim(),
          state: false
        }
        const res = await this.$axios.post('https://todosapp-api.herokuapp.com/api/items/', item);
        const id = res.data.body;
        const newItem = {
          id: id,
          content: item
        }
        this.createItem(newItem);
      }
      this.text = ''
    },
  },
};
</script>