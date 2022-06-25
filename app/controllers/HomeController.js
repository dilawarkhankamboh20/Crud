const employModel=require("../models/employ")

const HomeController=()=>{


    return{
      async  index(req, res){

            const employ= await employModel.find()
        
            return res.render("Home", {employ:employ})
        },
        postindex(req, res){
            const {name, city,profession}=req.body;

            const employ= new employModel({
                name, city,profession
            })
            employ.save().then(()=>{

                return res.redirect("/")
            })
        }
    }
}


module.exports=HomeController;