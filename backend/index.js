const express = required("express");

const Port = 5000;

const app = express()

app.listen(Port, () => {
    console.log(`Servido ${Port}`);
})