const express = require("express");
require("./db/mongo");
const app = express();
const port = 3000;

const apiRouter = require("./routers/api");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", apiRouter);
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
