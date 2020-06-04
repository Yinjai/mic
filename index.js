require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

router.post('/send', (req, res) => {
    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>Name: ${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email', 
        port: 587,
        auth: {
            user: "elenora.kulas@ethereal.email",
            pass: "Ewn9u12xVwEBXfVsBK"
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: 'elenora.kulas@ethereal.email',
        replyTo: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
        
        if(err) {
            return console.log(err)
        }

        res.send(
            nodemailer.getTestMessageUrl(info)
        );
    });
})

app.use('/.netlify/functions/index', router);

module.exports = app;
module.exports.handler = serverless(app);