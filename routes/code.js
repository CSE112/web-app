var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/code', function (req, res, next) {
    res.render('code', {title: 'Code'});
});

module.exports = router;

