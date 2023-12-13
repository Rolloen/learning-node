import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from "./entity/user";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    synchronize: process.env.DEBUG === 'true',
    logging: process.env.DEBUG === 'true',
    entities: [User],
    subscribers: [],
    migrations: [],
})