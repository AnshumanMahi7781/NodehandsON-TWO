const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    response.send("<h1>Home Page Of Node-Hands-On-Two</h1>");
})

app.get("/api/main", (request, response)=>{
    response.send("<div><h2  style = 'font-size : 35px'>Q.1 Explain Express.</h2><p style = 'font-size : 30px'>=>  Express, is a back end web application framework for building RESTful APIs with Node. js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.Creating APIs by just using pure Node.JS will become difficult if your application will grow which will happen eventually, this is the reason why we use this framework. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.Express provides a thin layer of fundamental web application features</p></div>")
});


app.listen(5500)