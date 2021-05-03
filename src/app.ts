import express from "express";
import mongoose from "mongoose";
import { isDev } from "./env";
import { log } from "./libs/logging/logger";
// import compression from 'compression';  // compresses requests

import initApi from "./initApi";
import initNotFound from "./libs/initNotFound";

console.log(`Running node version: ${process.version}`);

// Create Express server
const app = express();

// set the session for login cookies, if you require cookies
// app.use(expressSession({ secret: 'typescript boilerplate', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// Build the connection string
const dbURI = "mongodb://localhost:27017";

// Create the database connection
mongoose.connect(
  dbURI,
  { useNewUrlParser: true, dbName: "fortunesTower" },
);

if (isDev) {
  mongoose.set("debug", true);
}

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on(
  "connected",
  (): void => {
    log().info(`Mongoose default connection open to ${dbURI}`);
  },
);

// If the connection throws an error
mongoose.connection.on(
  "error",
  (err): void => {
    log().error(`Mongoose default connection error: ${err}`);
  },
);

// When the connection is disconnected
mongoose.connection.on(
  "disconnected",
  (): void => {
    log().error("Mongoose default connection disconnected");
  },
);

// Express configuration
app.set("port", process.env.PORT || 3000);
// app.use(compression());
app.use(express.json());

initApi(app);
initNotFound(app);

export default app;
