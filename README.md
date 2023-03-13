## Project purpose

The purpose is to create an application to demonstrate my knowledge in React JS, NodeJS and AWS.

It is an application with login, entry of companies and articles by company, allows downloading and reports using SES


## Technologies used

Monolitic  Aplication made with: 
* ReactJS.
* NextJS. 
* Typescrypt basicly we have a Types.ts file in [front](https://github.com/wavila88/lite-thinking/blob/development/src/utils/types.ts) and other for [backend](https://github.com/wavila88/lite-thinking/blob/development/src/pages/api/utils/types.ts) 
* NodeJS you can find backEnd code in [src/pages/api](https://github.com/wavila88/lite-thinking/tree/development/src/pages/api) using [Api Routes](https://nextjs.org/docs/api-routes/introduction).
* We´re using [Sequelize](https://sequelize.org/) as ORM here you can check the [models](https://github.com/wavila88/lite-thinking/tree/development/src/pages/api/models).
* This ORM allow to create dataTable using models, in this project we are making a [firts load](https://github.com/wavila88/lite-thinking/blob/development/src/pages/api/service/createDBService.ts), to don´t fill it manually.

## Start using Web App

### URL
[LITE-THINK](http://cdkin-myfar-af2ykik20ks7-1281929466.us-east-1.elb.amazonaws.com/)

### Admin User
 `user: josep@gmail.com`, `password: 123456`
### External User
 `user: external@gmail.com`, `password: 4321`
 
## Infraestructure AWS

To demostrate AWS strengths I created infraestructure as code project.  You can refer to this project to see it in more detail [this project](https://github.com/wavila88/lite-thinking-infraestructure) 
 

## Send report emails

* First new emails have to be verified by SES service please reach out to willocoav@gmail.com
* Make a success login > click in button `Send Report`

![image](https://user-images.githubusercontent.com/41836365/222772539-3eb2a7a8-90a3-4b61-b257-508f6171dbe9.png)

*  type emails to send report.

![image](https://user-images.githubusercontent.com/41836365/223399431-e2c2b96a-0f0a-45fd-96f2-6ec3f8aebfb6.png)


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


## Testing

* Here there is a [small testings](https://github.com/wavila88/lite-thinking/blob/development/src/test/index.test.js)
