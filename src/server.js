const express = require('express');

// port
const PORT = process.env.PORT || 3000

const app = express();

// statics files
app.use(express.static('public'));

app.listen(PORT, () => {
  console.info(`> API ready on localhost: ${PORT}`);
});
