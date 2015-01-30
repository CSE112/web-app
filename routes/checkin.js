var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sample2', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/walkin', function (req, res, next) {
    res.render('walkin', {title: 'Express'});
});


module.exports = router;