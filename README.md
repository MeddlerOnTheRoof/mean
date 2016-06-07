# mean
Practicing the mean stack

Under construction

## File Structure:
`= app: holds all our files for node components (models, routes)
    = models: contains our models
        - model.js: generic model for now
    - route.js: where routing is handled for the node application
= config: all our configuration will be here
    - database.js: configuration for mongoDB
= public: holds all our files for our frontend angular application
    - core.js: all angular code for our app
    - index.html: main view
- package.json: npm configuration to install dependencies/modules
- server.js: Node configuration`

## Todos:
    - build data models with mongoose
    - build out mongoDB
    - enter sample data
    - build express routes
    - look into winston vs morgan for node logging
    - add .gitignore
    - fix angular
    - CRUD UI
        - create page
        - read page (single, list) with paging, sorting, filtering
        - update page
        - delete page
    - authentication
    - more todos?