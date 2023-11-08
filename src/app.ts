import express, { Express, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
// import path from 'path';
import cookieParser from 'cookie-parser';
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
import homeRouter from './routes/index';
import usersRouter from './routes/users'
// var usersRouter = require('./routes/users');

var app: Express = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

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