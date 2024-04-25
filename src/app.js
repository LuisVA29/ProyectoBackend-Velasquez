const express = require("express");
const productsRoutes = require("./routes/products.routes");
const cartsRoutes = require("./routes/carts.routes");

PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
