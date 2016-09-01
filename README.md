# mean
Practicing the mean stack

Under construction

## File Structure:
- _app_: holds all our files for node components (models, routes)
    - _models_: contains our models
        - model.js: generic model for now
    - route.js: where routing is handled for the node application
- _config_: all our configuration will be here
    - database.js: configuration for mongoDB
- _public_: holds all our files for our frontend angular application
    - core.js: all angular code for our app
    - index.html: main view
- package.json: npm configuration to install dependencies/modules
- server.js: node configuration

## Todos:
    - add datascript file
    - build single city get route
    - add optional server-side querying (viz. paging, sorting, filtering)
    - configure server-side filtering with angular resource
    - look into winston vs morgan for node logging
    - add favicon
    - add .gitignore
    - implement require.js with es6 import feature
    - shift to typescript?
    - CRUD UI
        - create page
        - read page (single, list) with paging, sorting, filtering (client side)
        - update page
        - delete page
        - beautify
    - authentication
    - add persisted user settings (e.g. dark theme, client/server side querying)

## Notes:
### mean
Mean is an open source full JavaScript stack that excels at quickly building out simple CRUD web applications. It uses mongoDB as its database, Express framework on Node as the webserver, and Angular as its UI framework.

Pros
    - JavaScript is everywhere
		- strong ecosystem
		- tons of documentation
		- one language means no need for a lot of diverse knowledge
	- easy to implement quickly esp. with generators
	- cross platform
Cons
    - JavaScript
		- all the issues that come with JavaScript
		- really need to have to know JavaScript
	- cons for different components
        - mongodb is bad at things relational databases are good at (viz. CUD of CRUD)
        - node is is bad at CPU intensive operations and has poor memory management
        - angular has scope management issues and creates a lot of JS watch expressions which can cause performance issues 

### mongoDB
Open source, document-based database where data is stored in BSON, a JSON-like documents with dynamic schema. Rather than tables, collections are used which contain documents instead of rows. This terminology is used because any given document does not need to obey the same schema as the others in the same collection (although I am not sure if mongoosejs interferes or does anything with regard to that functionality).

Commands:
    - show dbs
    - use mean-example
    - db.help()
    - db.cities.find()
    - db.cities.find({ city: "CHESTER" })
    - db.cities.find({ state: "PA" })
    - db.cities.find({ pop: { $gt: 100000 } })
    - db.cities.find({ pop: { $lt: 0 } })
    - db.cities.find({ loc: { $geoWithin: { $geometry: { type : "Polygon" , coordinates: [ [ [ -80, 30 ], [ -80, 35 ], [ -85, 35 ], [ -85, 30 ], [ -80, 30 ] ] ] } } } })
    - db.cities.aggregate([ { $group: { _id: 1, totalPop: { $sum: "$pop" }, count: { $sum: 1 } } } ]) 

Pros
    - easy to scale by just adding more machines due to sharding
    - non-normalized data structure makes it well suited for reading complicated entities (rather than many subordinate lookup tables, one document) **
Cons
    - syntax can get messy (in my opinion) due to a large number of nest parenthesis and brackets
    - inferior to relational databases for dealing with normalized data
    - no transactions
    - each document has field names stored inside it


## NodeJS & ExpressJS
Node is a JavaScriptruntime built on Chrome's V8 JavaScript engine that is used as the web server in the MEAN stack. It is event-driven, using a non-blocking I/O model. What does that mean? Well, Node has an "event loop". This event loop is what allows single-threaded JavaScript to mimic asynchronous operations thus enabling Node to handle significant throughput. The way that JavaScript works with the DOM is also event based - elements of the DOM are assigned an event handlers such as '.onclick()', likewise, aspects of Node have an event emitters that you can write event handling for. An example of such an event would be a request to the server's API.

Express is a web application framework for Node and is inspired by Sinatra, a domain-specific language for Ruby.

Behind the scenes, the JS engine will poll it's event queue for events and when an event occurs it will execute execute pre-defined code, a callback, that you have associated with an event that you registered with Node using Express, e.g. 'localhost:8642/api/city'.

Pros
    - can stream big files
    - websockets
    - good at io
    - easy to get started with thanks to Express
Cons
    - need a lot of knowledge to scale it well
    - poor error handling
    - inherits V8 engine memory management issue
    - bad at cpu-intensive operations
### AngularJS
AngularJS is a single page application framework for structuring your web apps using dynamic two-way bindings, controllers, and a UI router intended to make building CRUD applications simple. Angular operates on the beliefs that DOM manipulation should be separate from your business logic in order to improve testability and organization of your app. Angular is largely organized into Controllers, Services, and Directives where Controllers and Directives organize the application into different layers of scope and Services provide cross-scope functionality/data as singletons.

Pros
    - Satisfyingly easy to pass data from server through Angular to the DOM in RESTful CRUD apps
    - Powerful organizational tools
    - Highly modular
Cons
    - Scope hell
    - 2,000 bindings performance issues
    - not as great a fit for none CRUD apps
    - can be overkill

## Links
### mean
    - http://mean.io/#!/
    - http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and
#### CodeSchool
    - https://www.codeschool.com/screencasts/mean-stack-firing-a-tracer-bullet
    - https://www.codeschool.com/screencasts/mean-stack-anchor-links-routes-and-medals
    - https://www.codeschool.com/search?utf8=%E2%9C%93&query=mean
#### ScotchIO
    - https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
    - https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure
    - https://scotch.io/tutorials/making-mean-apps-with-google-maps-part-i
    - https://scotch.io/tutorials/making-mean-apps-with-google-maps-part-ii
    - https://scotch.io/tutorials/deploying-a-mean-app-to-amazon-ec2-part-1
    - https://scotch.io/tutorials/deploying-a-mean-app-to-amazon-ec2-part-2
### mongoDB
    - https://docs.mongodb.com/manual/
    - http://mongoosejs.com/
    - https://www.codeschool.com/courses/the-magical-marvels-of-mongodb
    - https://university.mongodb.com/?_ga=1.59703789.1760068318.1441899177
    - https://scotch.io/tutorials/an-introduction-to-mongodb
### NodeJS & ExpressJS
    - https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js
    - https://nodejs.org/en/about/
    - https://expressjs.com/
    - https://www.codeschool.com/courses/real-time-web-with-node-js
    - https://www.codeschool.com/courses/building-blocks-of-express-js
    - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
### AngularJS
    - https://angularjs.org/
    - http://www.w3schools.com/angular/angular_intro.asp
    - https://thinkster.io/a-better-way-to-learn-angularjs
    - https://www.codeschool.com/courses/shaping-up-with-angular-js
    - https://www.codeschool.com/courses/staying-sharp-with-angular-js