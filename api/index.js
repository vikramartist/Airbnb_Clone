const Express = require("express");
const app = new Express();
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/test", (req, res) => {
  res.send("test ok!");
});

app.listen(8000, () => {
  console.log("Application running on port 8000");
});
