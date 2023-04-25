const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const category = require("./Data/categories.json");
const news = require("./Data/news.json");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News Api Running");
});

app.get("/news-category", (req, res) => {
  res.send(category);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === '08') {
    res.send(news);
  } else {
    const categoryNews = news.filter((news) => news.category_id === id);
    res.send(categoryNews);
  }
});

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((news) => news._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("dragon-app running on port", port);
});
