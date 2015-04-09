# lazo-hello-world
Simple [lazo](https://github.com/lazojs/lazo/) example that
renders "Hello, {{fname}} {{lname}}."

## Major Players
These are the main pieces that create the route response.

### app/app.json
This defines the route response when the ip/domain(/) is hit.
[[docs](https://github.com/lazojs/lazo/wiki/Configuration#appjson)]

### models/user/server/syncher.js
This loads the user data that populates the user model.
[[docs](https://github.com/lazojs/lazo/wiki/Models-and-Collections#synchers)]

### components/hello/controller.js
This loads the user model and pushes it to the component context.
[[docs](https://github.com/lazojs/lazo/wiki/Components#controller)]

### components/hello/views/index.hbs
This renders the hello message using the user model data that was automatically
injected into the template rendering context.
[[docs](https://github.com/lazojs/lazo/wiki/Components#views)]

## Getting started

Fork and clone [lazo-hello-world](https://github.com/jstrimpel/lazo-hello-world):

```shell
git clone https://github.com/{YOUR_USERNAME}/lazo-hello-world.git
```

Install dependencies (from local lazo-hello-world repo):

```shell
npm install
```

Finally start the new application (from local llazo-hello-world repo):

```shell
npm start
```
You are done.

Open `http://localhost:8080` in a browser to verify that the application is running.

## Questions

Great. We are glad this has peaked your interest.

There is alot going on behind the scenes that is not covered in this example.

Post questions to the [LazoJS Google Group](https://groups.google.com/forum/#!forum/lazojs) and
follow [@lazojs](https://twitter.com/lazojs) on Twitter.
