require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
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
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `
    const oauth2Client = new OAuth2(
        process.env.CLIENTID,
        process.env.CLIENTSECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESHTOKEN
    });
    const accessToken = oauth2Client.getAccessToken()


    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email', 
    //     port: 587,
    //     auth: {
    //         user: process.env.USER,
    //         pass: process.env.PASS
    //     }
    // });

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "madeinchafford@gmail.com",
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            refreshToken: process.env.REFRESHTOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: 'madeinchafford@gmail.com',
        replyTo: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
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