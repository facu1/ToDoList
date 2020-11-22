const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

router.get('/', (req, res) => {
  controller.getItems()
    .then((itemList) => {
      response.success(res, itemList, 200)
    })
    .catch(e => {
      response.error(res, 'Unexpected Error', 500, e)
    })
});
router.post('/', (req, res) => {
  controller.addItem(req.body)
    .then(id => {
      response.success(res, id, 201)
    })
    .catch(e => {
      response.error(res, 'Invalid Format', 400, e)
    })
});

router.put('/:id', (req, res) => {
  controller.updateItem(req.params.id, req.body)
    .then(() => {
      response.success(res, `Item ${req.params.id} updated`, 200)
    })
    .catch(e => {
      response.error(res, 'Internal Error', 500, e)
    })
});

router.delete('/:id', (req, res) => {
  controller.deleteItem(req.params.id)
    .then(() => {
      response.success(res, `Item ${req.params.id} removed`, 200)
    })
    .catch(e => {
      response.error(res, 'Internal Error', 500, e)
    })
});

module.exports = router;