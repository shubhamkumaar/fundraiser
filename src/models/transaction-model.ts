import mongoose from "mongoose";

const transactionSchema = new mongoose
.Schema({
    name:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    transaction_id:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    referralCode:{
        type: String,
    }
});

export const Transaction = mongoose.model("Transaction", transactionSchema);