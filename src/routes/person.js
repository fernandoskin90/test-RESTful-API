const express = require('express');

// instance router
const router = express.Router();

// endpoint person
router.get('/person', (req, res) => {
  res.send('you have a requested person');
})

// export router
module.exports = router;
