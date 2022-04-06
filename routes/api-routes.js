const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({data:'itworks'});
  });

  module.exports = router;