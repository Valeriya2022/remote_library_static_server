const express = require('express');
const app = express();
const PORT = 4000;

app.use('/books', express.static('books'));
app.use('/gov_resources', express.static('governmental_resources'));
app.use('/videos', express.static('videos'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
