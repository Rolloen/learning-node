import express, { Request, Response, NextFunction, } from 'express';
var homeRouter = express.Router();

homeRouter.get('/', function(req : Request, res : Response, next : NextFunction) {
  res.send('home');
});

export default homeRouter;
