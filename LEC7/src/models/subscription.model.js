// import mongoose, {Schema} from "mongoose";

// const subscriptonSchema = new Schema({
//     subscriber:{
//         type: Schema.Type>isObjectId,
//         ref:"User"
//     },
//     channel:{
//         type:Schema.Type.ObjectId,
//         ref:"User"
//     }
// },{timestamps:true})

// export const Subscripton = mongoose.model("Subscription",subscriptonSchema)

import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
        ref: "User"
    }
}, {timestamps: true})



export const Subscription = mongoose.model("Subscription", subscriptionSchema)