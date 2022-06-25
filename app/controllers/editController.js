const employModel=require("../models/employ")


const editController=()=>{

    return{

       async editemaploy(req, res){

            const singleEmp= await employModel.findById(req.params.id)
            return res.render("Update" , {singleEmp:singleEmp})
        },

     async updateemaploy(req, res){

         await employModel.findByIdAndUpdate(req.params.id , req.body)

           return res.redirect("/")

        },
     async deleteemaploy(req, res){
        
         await employModel.findByIdAndDelete(req.params.id , req.body)
           return res.redirect("/")

        }
    }
}

module.exports=editController;