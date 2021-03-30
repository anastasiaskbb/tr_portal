const express = require('express');
const app = express();
app.use('/', express.static('./public'));


async function start() {
    const port = process.env.port || 3000;
    try {
        await app.listen(port);
        console.log('Server started on ' + port + ' port');
    } catch (err) {
        console.log('Server not started with error: ${err}');
    }
}

start().catch(console.error);