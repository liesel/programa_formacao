const express = require('express')
const app = express()

const {
    PORT = 3000
} = process.env

app.get('/home', (req, resp) =>{
    resp.send("Hello World")
})


app.listen(PORT,()=>{
    console.log(`Servidor subiu na porta  ${PORT}`);
})