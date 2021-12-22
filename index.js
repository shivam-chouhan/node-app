
const express = require('express');
const router  = require("./api/api.js");


const app = express();
app.use(express.json())
app.use('/api', router,)

const PORT =  3000;


 app.listen(PORT, ()=>{
     console.log("this server now starts at port "+PORT);
 })