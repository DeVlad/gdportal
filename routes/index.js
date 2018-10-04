const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Main index')
})

router.use('/user', require('./user'));

router.get('*', function (req, res) {
  res.status(404).send('Error: 404. Page not found !');
});

module.exports = router
