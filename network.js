const express = require('express');
const network = express();
exports.connect = (port) => {
    network.listen(port, () => console.log(`Roberto listening on port ${port}`))
}
