var quotes = require('./quotes.json');

exports.getRandomOne = function() {
    var totalAmount = quotes.length;
    var rand = Math.ceil(Math.random() * totalAmount);
    return quotes[rand];
};

exports.getHomeworks = function() {

    return [{
        id: 11,
        catgory: "1",
        date: '2016-8-7',
        content: ' < h2 > 查看复习题 < /h2> < h3 > 中译日 < /h3>'
    },{
        id: 12,
        catgory: "1",
        date: '2016-8-8',
        content: ' < h2 > 查看复习题 < /h2> < h3 > 中译日 < /h3>'
    },{
        id: 13,
        catgory: "2",
        date: '2016-8-7',
        content: ' < h2 > 查看复习题 < /h2> < h3 > 中译日 < /h3>'
    },{
        id: 14,
        catgory: "3",
        date: '2016-8-7',
        content: ' < h2 > 查看复习题 < /h2> < h3 > 中译日 < /h3>'
    }];
};
