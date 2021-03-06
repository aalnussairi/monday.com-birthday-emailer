# Monday.com Sendgrid Birthday Emailer

A simple integration with monday.com and sendgrid via an express server that sends a plain text email to a specified individual, wishing them a happy birthday.

This is the JavaScript implementation.

For the TypeScript Implementation, [click here] (https://github.com/aalnussairi/monday.com-birthday-emailer-ts)

For the Serverless.js (AWS Lambda) Implementation, [click here] (TO BE UPDATED)

## Node Version Disclaimer

This app uses ESModules. It is highly recommended as such to use node 12.17.0 **OR HIGHER**

Furthermore, when importing files, you may have to use import x from 'directory/script.js' as opposed to ... from 'directory/script'

## Installation Information

Clone this repository then in the project root directory install the project's dependencies using the following command `npm install`

Alternatively, you can run the following commands:

```
 npx degit https://github.com/aalnussairi/monday.com-birthday-emailer/
 npm run install
```

## Configuring the environment

1. Rename the .env.example file to .env
2. If you don't wish to run the server on port 8300, change the PORT environment varible to your preferred port and reflect those changes to the npm scripts provided
3. Set the MONDAY_SIGNING_SECRET, this can be obtained by going to Developers -> \[Your App Name\] -> Basic Information. For more info refer to [the docs](https://apps.developer.monday.com/docs)
4. Follow the [SendGrid Guide](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs) to obtain an API key and set it as the SENDGRID_API_KEY environment variable
5. Set the email you are using to send emails to the SENDGRID_FROM environment variable
6. Set your name in the MY_NAME environment variable :)

## Running the Server

To run the server, use the following command

```
npm start
```

To run the server while watching for changes, use the following command

```
npm run serve
```

To expose the server to the world using ngrok, use the folowing command

```
npm run expose
```
