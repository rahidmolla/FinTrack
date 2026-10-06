const mongoose = require("mongoose");
const ledgerModel = require("./ledger.model")
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
            type: String,
            enum: {
                values: [ "Active", "Frozen", "Closed"],
                message: "status can be either ACTIVE, FROZEN or CLOSED",
            },
            default: "Active"
        },
        currency: {
            type: String,
            required: [ true, "currency is required for creating a account"],
            default: "INR"
        }
    
},
{
    timestamps: true
})

accountSchema.index({ user: 1, status: 1})

accountSchema.methods.getBalance = async function(){ 
    const balance = await ledgerModel.aggregate([

{ $match: { account: this._id}},
        {
            $group: {
                _id: null,
                totalDebit: {
                    $sum: {
                        $cond: [
                            { $eq: ["$type", "DEBIT"]},
                            "$amount",
                            0
                        ]
                        }
                    },
                totalCredit: {
                    $sum: {
                        $cond: [
                            { $eq: ["$type", "CREDIT"]},
                            "$amount",
                            0
                        ]
                        }
                        },
            }
        },
        {
            $project: {
                _id: 0,
                balance: { $subtract: ["$totalCredit", "$totalDebit"]}
            }
        }
    ])


}


const accountModel = mongoose.model("account", accountSchema)

module.exports = accountModel