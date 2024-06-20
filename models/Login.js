import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    email :{
        type :String,
        required: true
    },
    password :{
        type :String,
        required: true
    },

});

// const RecipeModel = mongoose.model('RecipeUser', RegistrationSchema)
// default module.exports = RecipeModel

export default mongoose.model('Recipelogin', LoginSchema);