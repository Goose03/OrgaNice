import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const Port = 5000;

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(Port, () => {
    console.log(`Servido ${Port}`);
})