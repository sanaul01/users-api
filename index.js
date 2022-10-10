const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



app.get('/', (req, res)=>{
    res.send("First users api")
})

app.listen(port, ()=>{
    console.log("listening on port", port)
})