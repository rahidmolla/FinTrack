const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [
            true, "Account must be associated with user"
        ],
        index: true
    },
        status: {
            enum: {
                value: [ "Active", "Frozen", "Closed"],
                message: "status can be either ACTIVE, FROZEN or CLOSED"
            }
        },
        currency: {
            type: "string",
            required: [ true, "currency is required for creating a account"],
            default: "INR"
        }
    
},
{
    timestamps: true
})

accountSchema.index({ user: 1, status: 1})

const accountModel = mongoose.model("account", accountSchema)

module.exports = accountModel