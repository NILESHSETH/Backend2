// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// import express from "express";

// dotenv.config();
// // const app = express();

// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     });
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!!", err);
// });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";   // ✅ THIS LINE WAS MISSING

dotenv.config({
    path:'./.env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
});