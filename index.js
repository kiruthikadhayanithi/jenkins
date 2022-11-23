const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worldlkllkjfklk!");
});

app.get("/", (req, res) => {
  res.send("Hello Worldlkllkjfklk!");
});


app.get("/", (req, res) => {
  res.send("Hello !");
});


if('ok'){
  console.log("A")
}
if('b'){
  console.log('b')
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
