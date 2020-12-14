
const Datastore = require('nedb');

const db = new Datastore({ filename: './projects.db', autoload: true, corruptAlertThreshold: 1 }) || new Datastore();


exports.create = function (req, res) {
    console.log(req.body)

    const doc = {
        title: req.body.title,
        module: req.body.module,
        progress: req.body.progress,
        Completiondate: req.body.Completiondate,
        deadline: req.body.deadline
    }

    // insert new doc
    db.insert(doc, (err, newDoc) => {
        if (err) console.log(err);
        res.redirect('/projects.html');
    });
}



