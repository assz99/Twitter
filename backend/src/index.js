const express = require("express");
const mongoose = require("mongoose");
 
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://Assz:coiote00@cluster-assz.yxeq8.mongodb.net/projTwitter?retryWrites=true&w=majority',{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
    }
);

app.use((req,res, next) =>{
    req.io = io;
    return next();
});

app.use(express.json());
app.use(require("./routes"));

app.listen(3000,() => {
    console.log("Servidor iniciado na porta 3000");
});