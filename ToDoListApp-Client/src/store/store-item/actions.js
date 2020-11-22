export function getItems({ commit }, items) {
  commit('getItems', items)
}

export async function createItem({ commit }, item) {
  commit('createItem', item)
}

export async function updateItem({ commit }, item) {
  commit('updateItem', item)
}

export async function deleteItem({ commit }, id) {
  commit('deleteItem', id)
}