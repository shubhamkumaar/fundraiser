import mongoose,{models} from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePic: {
        type: String,
    },
    referalCode:{
        type: String,
        unique: true,
    },    
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export const User = models.User || mongoose.model("User", userSchema);