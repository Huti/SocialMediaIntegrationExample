var express = require('express'),
    router = express.Router();
router.get('/', function(req, res) {
    res.render('tutorial_basics', { title: 'Tutorial' });
}).get('/init', function(req, res) {
    res.render('tutorial_init', { title: 'Tutorial' });
}).get('/login', function(req, res) {
    res.render('tutorial_login', { title: 'Tutorial' });
}).get('/graph', function(req, res) {
    res.render('tutorial_graph', { title: 'Tutorial' });
}).get('/plugins', function(req, res) {
    res.render('tutorial_plugins', { title: 'Tutorial' });
});

module.exports = router;
