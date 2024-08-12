import express from "express";
import fs from "fs";
import path from "path"; // Dosya yolunu güvenli şekilde almak için

const app = express();
const port = 9000;

// db.json dosyasının yolunu alın
const dbPath = path.join(__dirname, "db.json");

app.use("/", (req, res) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            console.error("Dosya okunamadı:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        try {
            const dbData = JSON.parse(data);
            res.json(dbData);
        } catch (parseError) {
            console.error("JSON parse hatası:", parseError);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
});

app.listen(port, () => {
    console.log(`Starting Server on Port ${port}`);
});
