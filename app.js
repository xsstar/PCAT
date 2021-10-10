const express = require('express');
const app = express();
const path = require('path');


//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portta başlatıldı..`);
});
