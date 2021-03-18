const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Cars = mongoose.model("Cars", { _id: String, model: String });

const Honda = new Cars({ _id: "24", model: "Kia K5" });
Honda.save().then(() => console.log("Saved 😁"));

Cars.find().then(console.log);

// Cars.find({ where: { name: "" } });
