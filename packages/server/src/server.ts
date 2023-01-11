import express, { Application } from "express";
import session from 'express-session';

import sequelize from "./sequelize";
import routes from "./routes";

const FileStore = require("session-file-store")(session);

const app: Application = express();

const sessionMiddleware = session({
    // A value to prevent arbitrary modulation of cookies. 
    // Use this value to encrypt and save the session.
    secret: "chatingapp", 
    // Pre-create and save sessions as unitized before they are saved.
    saveUninitialized: true, 
    // one day
    cookie: { secure: false },
    // A value that determines whether the session is always saved (even if it is not changed).
    // express-session documentation recommends that this value be false and sets it to true as needed.
    resave: false, 
    store: new FileStore(),
});

app.use(sessionMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use('/', routes);


app.listen(8000, () => {
    console.log('start');
});