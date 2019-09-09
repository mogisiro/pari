const mailConn = require('../../config/mailConfig');
const nodemailer = require('nodemailer');

module.exports.mail = (req, res, next) => {
    const transporter = nodemailer.createTransport(mailConn);
    const mailOptions = {
        from: mailConn.auth.user,
        to: 'ledi000@naver.com', //req.body.email,
        subject: 'node email test',
        text: 'today mail',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return res.json(err);
        }
        res.json(info.response);
    });
};