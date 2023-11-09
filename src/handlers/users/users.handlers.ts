import express, { Request, Response, NextFunction, } from 'express';
import { UserRegistrationModel, UserModel } from '../../models/users';

export const RegisterUserHandler = (req: Request, res: Response, next: NextFunction) : void => {
    const body: UserRegistrationModel = req.body;
    let newUser: UserModel = {
        email: body.email.toUpperCase(),
        username: body.username
    };
    res.status(200).send(newUser);
}