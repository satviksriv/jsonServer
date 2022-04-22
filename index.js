const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/model-json", (req, res) => {
    res.sendFile(path.join(__dirname, "/model.json"));
});

app.listen(port, () => {
    console.log("Server is up on port", port);
});