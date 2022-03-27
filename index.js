const express = require('express');
const app = express();
// call back function
app.get('/', (req, res) => {
	res.send('Thanks for calling me');
});

app.listen(3000, () => console.log('Listening to port 3000'));
