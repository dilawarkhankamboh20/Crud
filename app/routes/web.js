const editController = require("../controllers/editController");
const HomeController = require("../controllers/HomeController");

const employRoutes=(app)=>{


    app.get("/", HomeController().index)
    app.post("/", HomeController().postindex)
    app.get("/edit/:id", editController().editemaploy)
    app.post("/update/:id", editController().updateemaploy)
    app.post("/delete/:id", editController().deleteemaploy)
}


module.exports=employRoutes;