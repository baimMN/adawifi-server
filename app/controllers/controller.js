const { response } = require('mtr-response');
const model = require('../models/model');

exports.index = async (req, res) => {
  const { query } = req;
  const attributes = {};
  await model.indexDT(attributes, query)
    .then(ok => response(200, ok, res))
    .catch(err => response(400, err, res));
};

exports.create = async (req, res) => {
  const data = {};
  await model.create(data)
    .then(ok => response(200, { insertedId: ok.insertId }, res))
    .catch(err => response(400, err, res));
};

exports.view = async (req, res) => {
  const id = '';
  await model.view(id)
    .then(ok => response(200, ok, res))
    .catch(err => response(400, err, res));
};

exports.update = async (req, res) => {
  const id = '';
  const data = {};
  await model.update(id, data)
    .then(() => response(200, { updatedId: id }, res))
    .catch(err => response(400, err, res));
};

exports.delete = async (req, res) => {
  const id = '';
  await model.delete(id)
    .then(() => response(200, { deletedId: id }, res))
    .catch(err => response(400, err, res));
};
