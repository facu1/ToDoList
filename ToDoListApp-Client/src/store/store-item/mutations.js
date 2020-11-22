import Vue from 'vue'

export function getItems(state, items) {
  state.items = items
}

export function createItem(state, item) {
  Vue.set(state.items, item.id, item.content)
}

export function updateItem(state, item) {
  Object.assign(state.items[item.id], item.update)
}

export function deleteItem(state, id) {
  Vue.delete(state.items, id)
}