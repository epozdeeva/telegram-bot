require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT || 5000;

const sequelize = require('./application/modules/db/DB');

const telegramBot = require('./application/modules/telegramBot/telegramBot');

app.use(express.json());
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

start();