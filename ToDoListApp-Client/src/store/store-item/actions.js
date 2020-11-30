import axios from 'axios'
export async function getItems({ commit }) {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = 'https://todosapp-api.herokuapp.com/api/items/';
  } else {
    url = 'http://localhost:5000/api/items/';
  }
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
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = 'https://todosapp-api.herokuapp.com/api/items/';
  } else {
    url = 'http://localhost:5000/api/items/';
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
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = 'https://todosapp-api.herokuapp.com/api/items/';
  } else {
    url = 'http://localhost:5000/api/items/';
  }
  await axios.put(`${url}${change.id}`, change.update)
  commit('updateItem', change)
}

export async function deleteItem({ commit }, id) {
  let url;
  if (process.env.NODE_ENV === "production") {
    url = "https://todosapp-api.herokuapp.com/api/items/";
  } else {
    url = "http://localhost:5000/api/items/";
  }
  await axios.delete(`${url}${id}`);
  commit('deleteItem', id)
}