const express = require('express');
const cors = require('cors');
// const viewCount = require('./middleware/viewCount');
const userRouter = require('./routes/user.routes');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const dbConnect = require('./utils/dbConnect');


require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(viewCount);

dbConnect();


app.use('/user', userRouter)


async function run(){
    try{
        // await client.connect()
        // const database = client.db("insertDB");
        // const producets = database.collection("products");
     
    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('First backend server')
});

app.all("*", (req, res)=>{
    res.send('No route founded')
})

app.listen(port, ()=>{
    console.log('running first api server on port', port)
})