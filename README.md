# Kvick REST Server
A simple Node.js REST API setup using typescript

## Getting Started

Make sure you've installed it

``` bash
npm i -S kvick-rest-server
```

The library provides two basic classes that can be utilized in order to build a simple Node.js service: 

| Class | Constructor Props | Description
| --- | --- | --- |
| App | context | Name of the app and a port number that it should use.
|  | router | Router instance.
|  | middleware | Additional middleware that you might want to use. Optional.
| Router | routes | An array of **Route Objects**.

> Body parser is already built in, so you don't have to pass it as additional middleware

**Route Objects** play a crucial role in this setup and have the following structure:

| Property | Type | Description
| --- | --- | --- |
| path | string | Eg. ```"/some/path"```.
| verb | HTTPVerbs or USE | Either GET, POST, PUT, DELETE or USE if you just want to utilize a middleware. (Use HTTPVerbs and MiddlewareVerbs Enums)
| handler | RequestHandler or Router | Final handler. The one that actually sends response. Or another router.
| middleware | RequestHandler[] | An array of middleware functions. Optional.

Let's go through a series of steps required to build a simple app:

1. Define a router and pass it an array of **Route Objects**.

``` javascript
const router = new Router([
  {
    path: 'some/path',
    verb: HTTPVerbs.POST,
    handler: someHandler, 
  }
]);
```

2. Define an app, name it and pass the router you defined earlier.

``` javascript
const app = new App({ name: 'My app', port: 3000 }, router);
```

3. Run it.

``` javascript
app.run();
```

## Sample Project Structure

    ├── handlers                # Contains all handlers connected to Router
    ├── middleware              # Contains all middleware functions (if any)
    ├── providers               # For sake of simplicity if there's an async action
    │   ├── third-party.ts      # Such as third-party api calls
    │   ├── my-db.ts            # Or DB operations
    │   ├── smth-else.ts        # Let's just call it a provider
    ├── app.ts                  # Contains basic setup including all routes
    
 That's just a simple example. More complex stuff can be easily implemented as well.
 
 A collection of reusable setups or "mods" that extend basic App class can be added to this library later in order to simplify creation of certain types of services.
