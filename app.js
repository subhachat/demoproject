const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = process.env.defPort || 3000;
app.listen(port, () => {
  console.log(`Http Server is running on port ${port}`);
});

app.get("/", (req, resp) => {
  resp.send({ err: "NO_ERROR", msg: "Hello World!" });
});

app.get("/about", (req, resp) => {
  resp.send({ err: "NO_ERROR", msg: "Lot to say about this web application" });
});

app.get("/tmpl", (req, resp) => {
  resp.render("index");
});
