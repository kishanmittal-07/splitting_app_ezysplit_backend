# splitting_app_ezysplit_backend (Frontend code: https://github.com/kishanmittal-07/splitting_app_ezysplit_frontend/tree/main )
Ezysplit is a full-featured backend application designed to support the front-end functionality of the Ezysplit app. This backend is responsible for handling user authentication, managing expenses and transactions, calculating fair shares, and providing the necessary data to the client-side of the application

The backend project is structured into different folders, each serving a specific purpose. The most important folders include:

controllers: Contains the request handling logic for each API endpoint.
models: Defines the database models using an ORM (Object-Relational Mapping) such as Sequelize.
routes: Specifies the API routes and their associated controllers.
middleware: Houses any middleware functions used in request processing.
config: Configuration files, including database connection settings, environment variables, and other settings.
tests: Unit tests for various components of the application.
