

const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesControllers.js');
const projectsController = require('../controllers/projectsControllers.js');

router.get('/', pagesController.landing_page);
router.get('/projects', pagesController.projects_page);
router.get('/signup', pagesController.signup_page);
router.get('/login', pagesController.login_page);



router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})


router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})


module.exports = router;



