import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const initDB = () => {
    const client = new Client({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
    });
    client.on('error', (err : Error) => {
        console.error('db error', err);
    })
    console.log('DB initiated');

    return client;
}