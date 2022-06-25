const express= require("express")
const ejs= require("ejs")
const path= require("path")
const app= express()
const PORT= process.env.PORT || 3000;


// connection
require("./app/connection/connection")
// Assests
app.use(express.static(path.join(__dirname, "static")))
app.use(express.urlencoded({extended:false}))

// ejs template engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))

// routes
require("./app/routes/web")(app)

app.listen(PORT , ()=>{
    console.log(`Listing on the port ${PORT}`);
})