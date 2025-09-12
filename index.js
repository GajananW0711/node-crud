const { log } = require("console");
const express = require("express");

const app = express();
app.listen(8080, ()=> {
    console.log(`Server started on post :8080`);
})
 
app.get('/', (request, response)=>{
    response.send(`Response from GET method for url /`);
});

app.get('/home', (request, response)=>{
    response.send(`This your HOME PAGE`);
});

app.post('/about', (request, response)=>{
    response.send(`This is your ABOUT PAGE`);
});