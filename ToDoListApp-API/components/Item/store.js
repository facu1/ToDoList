const Model = require('./model');

const getItems = async () => {
  const items = await Model.find({});
  return items
}

const addItem = async (item) => {
  const newItem = new Model(item);
  await newItem.save();
  return newItem
}

const updateItem = async (id, item) => {
  return await Model.findByIdAndUpdate(id, item)
}

const removeItem = async (id) => {
  return await Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addItem,
  list: getItems,
  update: updateItem,
  remove: removeItem,
};