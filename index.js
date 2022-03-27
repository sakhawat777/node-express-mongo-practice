const express = require('express');
const app = express();
// Root API and call back function
app.get('/', (req, res) => {
	// res.send('Thanks for calling me');
	const fruit = {
		product: 'Ginger',
		price: '200 TK',
	};
	res.send(fruit);
});
app.get('/fruits/banana', (req, res) => {
	res.send({ fruit: 'banana', quantity: 1000, price: 10000 });
});

app.listen(3000, () => console.log('Listening to port 3000'));
