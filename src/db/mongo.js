const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/sparepart_db";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
