'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Test');
});
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map