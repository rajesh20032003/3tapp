const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const client = require('prom-client');

const app = express();
app.use(cors());
app.use(express.json());



client.collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});



mongoose.connect("mongodb://mongo:27017/devops");

const Item = mongoose.model("Item", {
  name: String,
});

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.get('/health',(req,res) =>{
  res('hello')
})

app.post("/items", async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.json(item);
});

app.delete("/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running"));
