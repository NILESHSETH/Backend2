// import dotenv from "dotenv";
// dotenv.config(); // this loads the .env file

// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// // get 5 jokes

// app.get("/api/jokes", (req, res) => {
  
// //   here we are defining the the joke and then we can pprint simply in the jason fromat
//     const jokes = [
//     {
//       id: 1,
//       title: "A joke",
//       content: "this is joke",
//     },
//     {
//       id: 2,
//       title: "A joke",
//       content: "this is joke",
//     },
//     {
//       id: 3,
//       title: "A joke",
//       content: "this is joke",
//     },
//     {
//       id: 4,
//       title: "A joke",
//       content: "this is joke",
//     },
//     {
//       id: 5,
//       title: "A joke",
//       content: "this is joke",
//     },
//   ];
//   res.send(jokes);
// });
// // now we can fetch the api from that
// const port = process.env.port || 3000;

// app.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "Joke 1", content: "This is joke 1" },
    { id: 2, title: "Joke 2", content: "This is joke 2" },
    { id: 3, title: "Joke 3", content: "This is joke 3" },
    { id: 4, title: "Joke 4", content: "This is joke 4" },
    { id: 5, title: "Joke 5", content: "This is joke 5" },
  ];
  res.json(jokes);  // ✅ res.json() not res.send()
});

const port = process.env.PORT || 3000;  // ✅ Capital PORT

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});