// Import the Secret Manager client and instantiate it:
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();
const secret_name = "my-secret"
const project_id = "contact-form"
async function accessSecret() {
  // Access the secret.
  const [accessResponse] = await client.accessSecretVersion({ name: secret_name });
  const responsePayload = accessResponse.payload.data.toString('utf8');
  console.info(`Payload: ${responsePayload}`);
  return responsePayload;
}
const secret = accessSecret();

// const nodemailer = require('nodemailer');
// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.USER,
//         pass: process.env.PASS
//     }
// });

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.contactForm = (req, res) => {
    // res.set('Access-Control-Allow-Origin', 'nationalunionofthehomeless.org');
    // let message = req.query.message || req.body.message || 'Hello NUH!';
    // res.status(200).send(message);
    res.set('Access-Control-Allow-Origin', '*');

    let mailDetails = {
        from: process.env.USER,
        to: process.env.USER,
        subject: 'Test mail',
        text: 'Node.js testing mail for NUH.'
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            return res.status(200).send("Error: " + err)
        } else {
            return res.status(200).send("Success.")
        }
    });
};

exports.helloSecret = (req, res) => {
    // res.set('Access-Control-Allow-Origin', 'nationalunionofthehomeless.org');
    // let message = req.query.message || req.body.message || 'Hello NUH!';
    // res.status(200).send(message);
    res.set('Access-Control-Allow-Origin', '*');
    return res.status(200).send(secret)
}
