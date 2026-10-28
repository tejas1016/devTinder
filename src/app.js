const express = require("express");

const app = express();

app.use((req, res)=>{
    res.send("Hello from the new server");
})

app.listen(7777, () => {
    console.log("server successfully listening on port 7777");
});