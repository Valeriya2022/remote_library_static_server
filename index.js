const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 4000;

app.use('/books', cors(), express.static('/media/remote-library/T7/remote_lib/books'));
app.use('/governmental_resources', cors(), express.static('/media/remote-library/T7/remote_lib/governmetal_resources'));
app.use('/videos', cors(), express.static('/media/remote-library/T7/remote_lib/videos'));

app.get('/', cors(), (req, res) => {
    res.send('Error! This page is not available! Эта страница не доступна! ');
});

app.listen(PORT,'0.0.0.0',() => console.log(`Server listening on port: ${PORT}`));
