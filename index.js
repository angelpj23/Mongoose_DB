const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://angelpj23:angel1123@cluster0.oz4e1.mongodb.net/db_test?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const Cars = mongoose.model("Cars", { model: String });

// const Honda = new Cars({ model: "Honda Civic" });
// Honda.save().then(() => console.log("Saved 😁"));

// Cars.find().then(console.log);

// Cars.find({ where: { name: "" } });
