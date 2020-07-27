const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes/api'));

app.listen(PORT, () =>
	console.log(`Server started on http://localhost:${PORT}`)
);
