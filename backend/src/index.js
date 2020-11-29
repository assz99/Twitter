const express = require("express");
const mongoose = require("mongoose");

 
const app = express();

mongoose.connect('mongodb+srv://Assz:coiote00@cluster-assz.yxeq8.mongodb.net/projTwitter?retryWrites=true&w=majority',{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
    }
);

app.use(express.json());
app.use(require("./routes"));

app.listen(3000,() => {
    console.log("Servidor iniciado na porta 3000");
});