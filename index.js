const server = require('./server')

const port = 6000; // anything above 3000 is safe
server.listen(port, () => console.log(`\n API on port ${port}`))