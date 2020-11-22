const store = require('./store');

const getItems = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

const addItem = (body) => {
  return new Promise((resolve, reject) => {
    if (!body.text || body.state === null) {
      console.error('[messageController] no hay texto o estado');
      reject('los datos son incorrectos');
      return false;
    }

    store.add(body)
      .then(item => {
        resolve(item._id);
      })
      .catch(e => {
        reject(e);
      });
  });
}

const updateItem = (id, item) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !item) {
      reject('invalid data');
      return false;
    } else {
      store.update(id, item)
        .then(() => {
          resolve();
        })
        .catch(e => {
          reject(e);
        });
    }
  });
}

const deleteItem = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('id invalido');
      return false;
    }
    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
}

module.exports = {
  addItem,
  getItems,
  updateItem,
  deleteItem,
}