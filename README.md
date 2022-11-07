# 01-Registration

The page will use the Node.js platform, Express as framework and Mongoose as the object data modelling (ODM) library for MongoDB.

User will be able to register using the first name, last name, email, password and confirrmed password. An error message will pop up if the email is existed in the database and when the filled details does not satisfy the requirement. 

## Running the Page

Build node.js

```mkdir folder```

```cd folder```

The command below will take you inside the folder and generate package.json with all the default configuration.

```npm init -y```

Install the dependencies.

```npm install --save body-parser cors express mongoose```

-body-parser: The body-parser npm module is a JSON parsing middleware. It helps to parse the JSON data, plain text, or a whole object.

-CORS: This is a Node JS package, also known as the express js middleware. It allows enabling CORS with multiple options. It is available through the npm registry.

-Express.js: Express js is a free open source Node js web application framework. It helps in creating web applications and RESTful APIs and act as middleware

-Mongoose: Mongoose is a MongoDB ODM for Node. It allows you to interact with the MongoDB database.

```npm install nodemon --save-dev```

Add your IP address to MongoDB network for database access.

Run the app.

```npm run start```

The app will be served at localhost:5000.
