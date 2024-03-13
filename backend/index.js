const express = required("express");
const mysql= require("mysql");
const cors=require("cors");



const Port = 5000;

const app = express()

app.listen(Port, () => {
    console.log(`Servido ${Port}`);
})