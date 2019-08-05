const { responseValid } = require('mtr-response');
const { checkBody } = require('mtr-validator');

exports.sample = async (req, res, next) => {
  checkBody(req, {
    name: { notEmpty: true, isLength: { max: 128 } },
  });
  await responseValid(req.validationErrors(true), res, next);
};
