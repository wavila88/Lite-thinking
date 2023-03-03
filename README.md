## Technologies used

Monolitic  Aplication made with: 
* ReactJS.
* NextJS. 
* Typescrypt basicly we have a Types.ts file in [front](https://github.com/wavila88/lite-thinking/blob/development/src/utils/types.ts) and other for [backend](https://github.com/wavila88/lite-thinking/blob/development/src/pages/api/utils/types.ts) 
* NodeJS you can find backEnd code in [src/pages/api](https://github.com/wavila88/lite-thinking/tree/development/src/pages/api) using [Api Routes](https://nextjs.org/docs/api-routes/introduction).
* We´re using [Sequelize](https://sequelize.org/) as ORM here you can check the [models](https://github.com/wavila88/lite-thinking/tree/development/src/pages/api/models).
* This ORM allow to create dataTable using models, in this project we are making a [firts load](https://github.com/wavila88/lite-thinking/blob/development/src/pages/api/service/createDBService.ts), to don´t fill it manually.

## User to navigate
 `user: josep@gmail.com`, `password: 123456`

## Send report emails

* Make a success login > click in button `send Report`

![image](https://user-images.githubusercontent.com/41836365/222772539-3eb2a7a8-90a3-4b61-b257-508f6171dbe9.png)

* From this project we will [call a API](https://github.com/wavila88/lite-thinking/blob/development/src/pages/api/service/enterpriseService.ts#:~:text=await%20makeRequest(,%7D)) with lambda function this lambda has permition to use 
SES (Amazom Simple Email Service) the code is not in this repo but there is **lambda code**:

### index.js lambda
```console
const aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {
  var params = {
    Destination: {
      ToAddresses: event.emails,
    },
    Message: {
      Body: {
        Text: { Data: event.message },
        
      },

      Subject: { Data: "Enterprises Report" },
    },
    Source: "willocoav@gmail.com",
  };
 
  return ses.sendEmail(params).promise()
};
```

* By the moment the email will be send just to **verified emails in aws** so this is and example of email:

![image](https://user-images.githubusercontent.com/41836365/222776249-215950e0-9730-4644-a2b2-1c7bc68a9aae.png)



