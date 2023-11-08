import express, { Request, Response, NextFunction, } from 'express';
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req : Request, res : Response, next : NextFunction) {
  res.send('respond with a resource');
});

export default usersRouter;
