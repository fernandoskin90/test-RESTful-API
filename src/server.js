const express = require('express');

const personRoutes = require('./routes/person');

// port
const PORT = process.env.PORT || 3000

const app = express();

// statics files
app.use(express.static('public'));

app.use(personRoutes);

app.listen(PORT, () => {
  console.info(`> API ready on localhost: ${PORT}`);
});
