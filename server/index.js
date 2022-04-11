const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.route");

const app = express();
const PORT = 3001;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/", userRoutes);

//server listen
const server = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dhruvdip:Dp%4026122000@cluster0.d97dg.mongodb.net/mern?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log("✅ Database connected");
      console.log(`✅ Server running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

server();
