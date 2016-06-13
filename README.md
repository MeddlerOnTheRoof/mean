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
    - build data models with mongoose
    - build out mongoDB
    - enter sample data
    - build express routes
    - look into winston vs morgan for node logging
    - add .gitignore
    - implement require.js with es6 import feature
    - shift to typescript?
    - CRUD UI
        - create page
        - read page (single, list) with paging, sorting, filtering
        - update page
        - delete page
    - authentication
    - more todos?

## Notes:
    - Changed from using Angular node module because I couldn't serve it up somehow. Might come back to doing that
