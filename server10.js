// 11. Express CRUD with MongoDB
const express = require("express"),
  mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shop")
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);
const Product = mongoose.model(
  "Product",
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
    },
    { timestamps: true },
  ),
);
app.get("/products", async (req, res) => res.json(await Product.find()));
app.get("/products/:id", async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.sendStatus(404);
    res.json(p);
  } catch (e) {
    res.status(400).json({ error: "Invalid product id" });
  }
});
app.post("/products", async (req, res) => {
  try {
    res.status(201).json(await Product.create(req.body));
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
app.put("/products/:id", async (req, res) => {
  try {
    const p = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!p) return res.sendStatus(404);
    res.json(p);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
app.delete("/products/:id", async (req, res) => {
  try {
    const p = await Product.findByIdAndDelete(req.params.id);
    if (!p) return res.sendStatus(404);
    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(400).json({ error: "Invalid product id" });
  }
});
app.listen(3000, () => console.log("Server on 3000"));
