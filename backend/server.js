require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3400;




app.get("/" , (req, res)=> {
    res.send("Hello My Name is Manisha koyralla")

})

app.listen(port, ()=> {
    console.log("Server is awesomely running")
})