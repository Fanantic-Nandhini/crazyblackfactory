const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes.js");
const path = require("path");

//DB CONNECTION
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://nandhini:nandhini@cluster0.bpixw.mongodb.net/crazyblackfactory?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
  })
  .catch(err => {
    console.log(err);
  });

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//MY ROUTES

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

//static assests in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
//PORT CONNECTION
const port = process.env.PORT || 8000;

//SERVER START
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
