const express = require('express');

const app = express();

app.use("/test",(req,res)=> {
res.send("jello from the server")
})

app.listen(3000, ()=> {
console.log("server listening on port 3000")
});