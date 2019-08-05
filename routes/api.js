const express = require('express');

const router = express.Router();
const { response } = require('mtr-response');
const validate = require('../app/middleware/validator');
const ctl = require('../app/controllers/controller');

router.get('/', (req, res) => {
  response(200, 'Meteor / RoomMe ~ Property Service', res);
});

// Sample Management
router.post('/sample', validate.sample, ctl.create);

module.exports = router;
