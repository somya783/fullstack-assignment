const express = require("express"),
  app = express();
app.use(express.json());
app.use(express.static("public"));
let products = [
  {
    id: 1,
    name: "Headphones",
    price: 1499,
    description: "Wireless headphones",
  },
];
let orders = [];
app.get("/api/products", (req, res) => res.json(products));
app.post("/api/products", (req, res) => {
  const p = { id: Date.now(), ...req.body };
  products.push(p);
  res.status(201).json(p);
});
app.put("/api/products/:id", (req, res) => {
  const i = products.findIndex((p) => p.id === +req.params.id);
  if (i < 0) return res.sendStatus(404);
  products[i] = { ...products[i], ...req.body, id: products[i].id };
  res.json(products[i]);
});
app.post("/api/orders", (req, res) => {
  const items = req.body.items || [];
  const total = items.reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  const order = { id: Date.now(), items, total, status: "Demo order placed" };
  orders.push(order);
  res.status(201).json(order);
});
app.get("/api/orders", (req, res) => res.json(orders));
app.listen(3000, () => console.log("Shop at http://localhost:3000"));
