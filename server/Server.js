const express = require("express");

const app = express();

let port = 8080;

require("./Routes/Index")(app);

app.listen(port, () => console.log(`server running on port ${port}`));
