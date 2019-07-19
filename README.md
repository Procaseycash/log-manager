<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Build the app

```bash
# development
$ npm run build:app
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Question and Answer
##### How we can build that application?
```$xslt
This application can be built using a microservice architecture such that all modular system are built as separate service while having the logManager as a single service system that house the routing strategy to the other microservices system.
Considering the kind of architecture. each service will either have a unique route pattern such as `users/`, `adminitrattions/` `payments/`, these patterns can be used to denote each service system and able to detect which log activities belongs to a particular microservice or having a unique serviceId present in every request header of that service.
In this case, I will be using a structural logging over file system in order to enable ease in data querying and mining.
```
##### Propose the tools that can be used to build that application taking into account the following challenges of data: variety, velocity, and volume.
```$xslt
There are several log management tools such as
    1. Loggly
    2. Logstash
    3. Splunk
    4. PaperTrails
    5. Storm
    6. Graylog2
 
```
##### Give the reasons why you chose a toll over another on
```$xslt
 The major overall issues is in 
     1. volume of data
     2. Price
     3. Security regarding sensitive data.
 
 These tools are capable in logging resources but there are one or more issues to lookout for.  
    1. Loggly: This is a tools mainly for devops to parse data coming from your app servers. Anything beyond that you’ll have to build yourself.
    2. Logstash: This is stack because it entails one or more technology such as kibana and elastic search. these stacks requires configuring separate instance on production which brings more management and complexity
    3. Splunk: For high scalability, requires dedicated cluster and somewhat subjective which means the cost of running it is high and it is also complex coming to management.
    4. PaperTrails: This is mosty a text based logging system which gives complexity for proper and advance data mining.
    5. Storm: This is limiting in amount of data that can be sent.
    6. Graylog2: The newest among others, this makes it limiting in usage.
        
```
##### What are the alternatives tools of the ones previously proposed?
```$xslt
The only alternative tools I think is best if we are more concerned about high level of customization and proprietary changes is `Build it yourself` and I would suggest the use of
    1. Document DB such MongoDB
    2. Elastic Search for deep querying and analysis.
```

##### Development Steps Taken
````$xslt
1  I adopted the use of `serviceId` as an identify for each microservice
2. This `serviceId` is predefined ID for each micro service and these are setup in env variables and each pointing to their baseurl.
3. I then make available a route strategy to pass request to the expected microservice
4. The interceptor is used to carry the main processing of logging by using a cloud support `Loggly`.
5. Configuration params for loggly can be found in env
6. This interceptor helps to log request after a complete cycle to loggly and able to catch all errors that might occur.
````
##### Improvement
```$xslt
1. Implementation of node clustering to enable efficiency for concurrent request scaling.
```

##### Limiting Factor
```$xslt
Due to time and load of work at work. I took less than 24hrs to build to this stage of the app.
So, I was unable to do the following and will appreciate if more time can be given.
1. Docker for containerization.
2. Node Clustering Implementation.
3. Test Cases.
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
