import express, { Request, Response, NextFunction, } from 'express';
import { RegisterUserHandler, LoginUserHandler } from '../handlers/users/users.handlers';
var usersRouter = express.Router();

/*Auth routes */
usersRouter.post('/register', RegisterUserHandler);
usersRouter.post('/login', LoginUserHandler);

export default usersRouter;
