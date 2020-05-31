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
        from: 'test@testaccount.com',
        to: 'elenora.kulas@ethereal.email',  
        subject: 'New Message from Contact Form',
        replyTo: 'test@testaccount.com',
        subject: "New message",
        text: req.body.message,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            return console.log(err)
        }
        console.log("Message sent: %s", info)
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
    });
    
    res.send("message sent here");
})

app.use('/.netlify/functions/index', router);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

module.exports.handler = serverless(app);