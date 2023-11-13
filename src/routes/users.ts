import express, { Request, Response, NextFunction, } from 'express';
import { RegisterUserHandler } from '../handlers/users/users.handlers';
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.post('/register', RegisterUserHandler);

export default usersRouter;
