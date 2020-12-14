
const Datastore = require('nedb');

const db = new Datastore({ filename: './projects.db', autoload: true, corruptAlertThreshold: 1 }) || new Datastore();


exports.landing_page = function (req, res) {

    res.redirect('/home.html');

}

exports.signup_page = function (req, res) {

    res.redirect('/signup.html');

}

exports.login_page = function (req, res) {

    res.redirect('/login.html');

}

exports.projects_page = function (req, res) {

    res.redirect('/projects.html');

}






