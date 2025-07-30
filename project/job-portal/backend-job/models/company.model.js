import mongoose from "mongoose";


const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    description:{
        type:String
    },
    website:{
        type:String
        
    },
    location:{
        type:String
        
    },
    logo:{
        type:String
    },
    useId:{
     type:'User',
     required:true
    }




},{timestamps:true});

export default company = mongoose.model('Company',companySchema);