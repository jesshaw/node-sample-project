var Homework = require('./homework.js');

exports.index = function(req, res) {
    Homework.find({ theClass: req.query.theClass }, null, { sort: { date: -1 } }, function(err, homeworks) {
        if (err)
            res.send(err);
        res.send(homeworks);
    });
};

exports.create = function(req, res) {
    var homework = new Homework();
    homework.catgory = req.body.catgory;
    homework.date = new Date(req.body.date);
    homework.theClass = req.body.theClass;
    homework.content = req.body.content;
    homework.createTime = Date.now();
    homework.updateTime = Date.now();
    homework.status = req.body.status;
    homework.save(function(err, homework) {
        if (err)
            res.send(err);
        res.send(homework);
    });
};

exports.getById = function(req, res) {
   console.log(req.user);
    Homework.findById(req.params.id, function(err, homework) {
        if (err)
            res.send(err);
        res.send(homework);
    });
};


exports.update = function(req, res) {
    Homework.findOne({ _id: req.params.id }, function(err, homework) {
        if (err)
            res.send(err);

        if (homework) {
            if (req.body.catgory) {
                homework.catgory = req.body.catgory;
            }
            if (req.body.date) {
                homework.date = new Date(req.body.date);
            }
            if (req.body.theClass) {
                homework.theClass = req.body.theClass;
            }
            if (req.body.content) {
                homework.content = req.body.content;
            }

            if (req.body.status) {
                homework.status = req.body.status;
            }

            homework.updateTime = Date.now();

            homework.save(function(err, homework) {
                if (err)
                    res.send(err);
                res.send(homework);
            });
        }
    });
};

exports.deleteById = function(req, res) {
    Bear.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        // res.json({ message: 'Successfully deleted' });
        res.send({ message: '删除成功' });
    });
};
