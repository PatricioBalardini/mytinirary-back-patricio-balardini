import "dotenv/config.js";
import __dirname from "./utils.js";
import express from "express";
import path from "path";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import errHandler from "./middlewares/errHandler.js";
import notFounHandle from "./middlewares/notFounHandle.js";

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(errHandler);

// error handler
app.use(notFounHandle);

export default app;
