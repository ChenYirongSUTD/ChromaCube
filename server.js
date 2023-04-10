const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

database = {
  led: "on",
};

app.post("/update", (req, res) => {
  data = req.body;
  console.log(data.led);
  res.send("Hello World!");
});

app.get("/getUpdate", (req, res) => {
  res.send(database.led);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
