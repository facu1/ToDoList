import axios from 'axios'

const url = process.env.URL

export async function getItems({ commit }) {
  const res = await axios.get(url);
  const arr = res.data.body;
  const items = {};
  arr.forEach(e => {
    items[e._id] = {
      text: e.text,
      state: e.state
    }
  });
  commit('getItems', items)
}

export async function createItem({ commit }, text) {
  const item = {
    text: text,
    state: false
  }
  const res = await axios.post(url, item);
  const id = res.data.body;
  const newItem = {
    id: id,
    content: item
  }
  commit('createItem', newItem)
}

export async function updateItem({ commit }, change) {
  await axios.put(`${url}/${change.id}`, change.update)
  commit('updateItem', change)
}

export async function deleteItem({ commit }, id) {
  await axios.delete(`${url}/${id}`);
  commit('deleteItem', id)
}