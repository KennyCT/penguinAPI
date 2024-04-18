import { Sequelize } from "sequelize-typescript";
import { User } from "../models/userDB";
import { readFileSync } from 'fs';

let password: string = readFileSync('../pw.txt', 'utf-8').trim();

const connection = new Sequelize({
    dialect: "mysql",
    host: "212.192.28.59",
    username: "u111397_aTYQzdEwki",
    password: password,
    database: "s111397_penguin",
    logging: false,
    models: [User]
});

export default connection;
