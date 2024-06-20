import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
    Fname :{
        type :String,
        required: true
    },
    Lname :{
        type :String,
        required: true
    },
    email :{
        type :String,
        required: true
    },
    passowrd :{
        type :String,
        required: true
    },

});

// const RecipeModel = mongoose.model('RecipeUser', RegistrationSchema)
// default module.exports = RecipeModel

export default mongoose.model('RecipeUser', RegistrationSchema);