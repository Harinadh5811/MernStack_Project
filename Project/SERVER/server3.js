const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { request, response } = require('express')
const PORT=8081;
const app = express()
app.use(cors())
app.use(express.json())
const uri = "mongodb+srv://Hari:nadh@cluster0.llzkgx8.mongodb.net/data?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
client.connect()
const db = client.db("data")
const col = db.collection("sdp")

app.get('/',(request,response) => {
  response.send('This is a Server')
})

app.post('/insert', (request,response) => {
  col.insertOne(request.body)
  console.log(request.body)
  response.send(request.body)
})

app.get('/check',(req,res)=>{
  async function find(){
    try{
      const result=await col.findOne({email:req.query.un})
      if(result == null)
      {
        res.send("FAIL")
        
      }
      else{
        if(req.query.pw === result.password)
        {
          res.send("PASS")
          
        }
        else
        {
          res.send("FAIL")
          
        }

      }
      
    }
    finally{}  
  }
  find().catch(console.dir)
})

app.listen(PORT)
console.log("server started")
