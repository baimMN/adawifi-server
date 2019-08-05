const { query, datatable } = require('mtr-mysql');

const table = {
  tableName: 'table_name',
  primaryKey: 'id',
  timeStamp: true,
  protectedCol: ['created_at', 'updated_at'],
  uuidCol: ['id'],
  debug: true,
};

exports.indexDT = async (attributes, params) => datatable(attributes, params, table)
  .then(ok => ok)
  .catch((err) => {
    throw err;
  });

exports.index = async params => query.get(params, table)
  .then(ok => ok)
  .catch((err) => {
    throw err;
  });

exports.create = async data => query.create(data, table)
  .then(ok => ok)
  .catch((err) => {
    throw err;
  });

exports.view = async id => query.find(id, table)
  .then(ok => ok)
  .catch((err) => {
    throw err;
  });

exports.update = async (id, data) => query.update(id, data, table)
  .then(ok => ok)
  .catch((err) => {
    throw err;
  });

exports.delete = async id => query.delete(id, table)
  .then(ok => ok)
  .catch((err) => {
    throw err;
  });
