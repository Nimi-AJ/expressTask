const express = require('express');
const app = express();
const useRouter = require('./routers');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(useRouter);

app.get("/", (request, response) => {
    return response.send("HHello World!");
})

// app.get("/", (request, response) =>{
// return response.send(`This is the home page`);
// })

app.listen(3000, () =>{
    console.log("Server running on port 3000!");
})

console.log('breakpoint');