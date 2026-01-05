const express = require("express");
const app = express();
const user = require("./src/Routes/UserRoute");

// middleware to read JSON
app.use(express.json());


app.use("/users", user);
// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
