import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import "reflect-metadata";
// var indexRouter = require('./routes/index');
import { initDB } from './db/db';
import { AppDataSource } from './db/dataSource';
import homeRouter from './routes/index';
import usersRouter from './routes/users';
// var usersRouter = require('./routes/users');

var app: Express = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//INIT DB
var db = initDB();
db.connect(); 

AppDataSource.initialize();

console.log('tesstr')

app.use('/', homeRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// // error handler
// app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;