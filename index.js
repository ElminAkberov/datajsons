import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 9000;

// db.json dosyasının yolu
const dbPath = path.resolve(__dirname, 'db.json');

// Verileri oku ve JSON olarak döndür
app.get('/', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Veri okunamadı' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Starting Server on Port ${port}`);
});
