const express = require("express");
const app = express();
const mongoose = require("mongoose")
const UserModel = require("./models/Users");
const cors = require("cors");


app.use(express.json());
app.use(cors());
//mongodb+srv://root:root@cluster0.hji8cwr.mongodb.net/
//mongoose.connect("mongodb+srv://root:root@cluster0.hji8cwr.mongodb.net/")
// mongoose.connect(
//     "mongodb+srv://root:root@cluster0.hji8cwr.mongodb.net/musicstore.users?retryWrites=true&w=majority"
// );
mongoose.connect(
    "mongodb+srv://root:root@cluster0.j7fql.mongodb.net/musicstore?retryWrites=true&w=majority"
  );

// app.get("/getUsers", (req, res) => {
//     UserModel.find({}, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });
// });
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

app.post("/createUser", async (req, res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});

app.listen(3001, ()=>{
    console.log("Server is running!")
});