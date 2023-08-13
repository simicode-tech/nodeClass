const express = require("express");
const data = require("./data");
const app = express();
// console.log(app);

// get all product
app.get("/product", (req, res) => {
  res.send(data);
});

// single product
app.get("/product/:id", (req, res) => {
  const params = req.params;
  const singleProduct = data.find(
    (product) => product.id.toString() === params.id
  );
  // console.log(res);
  res.json({ data: singleProduct });
});
app.post("/user", (req, res) => {
  res.status(200).send("user created");
});
app.put("/user", (req, res) => {
  res.status(201).send("user updated");
});
app.delete("/user", (req, res) => {
  res.status(200).send("user deleted");
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000");
});
