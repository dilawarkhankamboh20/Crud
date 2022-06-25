
const mongoose=require("mongoose")


const employSchema=new mongoose.Schema({
    
    name:{type:String,required:true},
    city:{type:String,required:true},
    profession:{type:String,required:true},
})


const employModel= mongoose.model("emloy", employSchema)


module.exports=employModel