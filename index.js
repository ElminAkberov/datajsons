import express from "express";
import fs from "fs";

const app = express();
const port = 9000;

// db.json dosyasını oku
const dbData = JSON.parse(fs.readFileSync("db.json", "utf8"));

app.use("/", (req, res) => {
    res.json(dbData);
});

app.listen(port, () => {
    console.log(`Starting Server on Port ${port}`);
});
