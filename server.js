//import package yang dibutuhkan
const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();

//import controller
const home = require("./controllers/homeControllers");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/components"),
    defaultLayout: "main_layout.html",
    extname: "html",
  })
);

//routing
app.use("/", home);

//listerner
app.listen(3000, () => console.log("listen port 3000"));
