const dbConn = require('../../db/connect');
const hasher = require('./utils/hasher');

dbConn.connect();

module.exports.list = (req, res, next) => {
    console.log('list excute')
    dbConn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send({ error: false, data: results, message: 'users list.' });
    });
};

module.exports.detail = (req, res, next) => {
    console.log('detail excute')
    let userId = req.params.id;
    if (!userId) {
        return res.status(400).send({ error: true, message: 'Please provide userId' });
    }

    dbConn.query('SELECT * FROM users where id=?', userId, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send({ error: false, data: results[0], message: 'users list.' });
    });
};

module.exports.create = (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({ error:true, message: 'Please provide user' });
    }
    dbConn.query('INSERT INTO users (username, password) VALUES (?, ?)', [req.body.username, hasher.hash(req.body.password)], function (error, results, fields) {
        if (error) throw error;
        return res.status(201).send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
};

module.exports.update = (req, res, next) => {
    
};

module.exports.delete = (req, res, next) => {
    let userId = req.body.id;
    
    if (!userId) {
        return res.status(400).send({ error: true, message: 'Please provide userId' });
    }
    dbConn.query('DELETE FROM users WHERE id = ?', [userId], function (error, results, fields) {
        
        if (error) throw error;
        return res.status(204).send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
};

module.exports.signin = (req, res, next) => {
    console.log(req.body.username);
    dbConn.query('SELECT * FROM users WHERE username = ?', [req.body.username], function(error, results, fields) {
        if (error) throw error;
        else {
            if(results.length > 0) {
                if(hasher.isMatch(req.body.password, results[0].password)) {
                    return res.status(200).send({error: false, data: results, message: 'login success'});
                } else {
                    return res.status(204).send({error: false, data: results, message: 'username and password does not match'});
                }
            } else {
                return res.status(204).send({error: false, data: results, message: 'username does not exists'});
            }
        }
    })
};