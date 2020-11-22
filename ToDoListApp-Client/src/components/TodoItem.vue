<template>
  <q-item v-ripple class="q-pa-md" >
    <q-item-section side>
    <q-checkbox 
      size="auto" 
      :value="item.state" 
      @click.native.prevent="updateState({id: id, update: {state: !item.state}})"/>
    </q-item-section>

    <q-item-section :class="{completed: item.state}">
      <div v-if="!newItem.edit" @dblclick="edit"><p class="text">{{item.text}}</p></div>
      <q-input
        v-else
        @keyup.enter="updateText({id: id, update: {text: newItem.text.trim()}})"
        @blur="updateText({id: id, update: {text: newItem.text.trim()}})"
        @keyup.esc="cancelEdit"
        borderless
        v-model="newItem.text"
      ></q-input>
    </q-item-section>

    <q-item-section side>
      <q-btn flat color="dark" icon="delete" @click.stop="removeItem(id)"/>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['item', 'id'],
  data() {
    return {
      newItem : {
        text: this.item.text,
        edit: false
      }
    }
  },
  methods: {
    ...mapActions("store", ["deleteItem", "updateItem"]),
    edit(){
      this.newItem.edit = true;
      this.newItem.text = this.item.text
    },
    cancelEdit(){
      this.newItem.edit = false;
    },
    async update(change){
      let url;
      if(process.env.NODE_ENV === 'production') {
        url = 'https://todosapp-api.herokuapp.com/api/items/';
      } else {
        url = 'http://localhost:5000/api/items/';
      }
      await this.$axios.put(`${url}${change.id}`, change.update)
      this.updateItem(change)
      this.newItem.edit = false;
      this.newItem.text = this.item.text
    },
    async updateState(change){
      this.update(change)
    },
    async updateText(change) {
      if (change.update.text.length) {
        this.update(change)
      } else {
        this.newItem.text = this.item.text;
      }
    },
    async remove(id){
      let url;
      if(process.env.NODE_ENV === 'production') {
        url = 'https://todosapp-api.herokuapp.com/api/items/';
      } else {
        url = 'http://localhost:5000/api/items/';
      }
      await this.$axios.delete(`${url}${id}`);
      this.deleteItem(id);
    },
    removeItem(id){
      if(!this.item.state){
        this.$q.dialog({
          title: 'Confirmar',
          message: '¿Está seguro de que desea eliminar esta tarea?, aún no se marcó como completa',
          cancel: true,
          persistent: true
        }).onOk(async() => {
          this.remove(id)
        })
      } else {
        this.remove(id)
      }
    }
  }
};
</script>