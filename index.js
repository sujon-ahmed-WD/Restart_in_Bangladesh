const express=require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express()
const cors=require('cors')
const Port=process.env.PORT || 5000;

// User Name
/**
 * UserName:Server_Side
 * Password:!Q2w3E4rT$y7u8i90p
 */

// Midlewere
app.use(cors()),
app.use(express.json())

// const uri = "mongodb+srv://Server_Side:!Q2w3E4rT$y7u8i90p@cluster0.v9rdx72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://Server_Side:!Q2w3E4rT$y7u8i90p@cluster0.v9rdx72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();


    const database = client.db("usersDB");
    const userCollection = database.collection("users");


    //  Post Work Start
    app.post('/users',async(req,res)=>{
        const user=req.body;
        console.log('new user',user);
        const result = await userCollection.insertOne(user);
        res.send(result)
    })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
     
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send('Ok Server is Loking')
})

app.listen(Port,()=>{
    console.log(`Server is Runinge in the post ${Port}`);
})

/**
 * function run(){
 * }
 * run()
 */