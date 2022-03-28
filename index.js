const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const users = ['Sakhawat', 'Biplob', 'Tina', 'Rocky', 'Bina'];
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
app.get('/users/:id', (req, res) => {
	const id = req.params.id;
	// sort query (old website)
	// http://localhost:5000/users/4?sort=asc
	// http://localhost:5000/users/4?sort=desc
	console.log(req.query);
	const name = users[id];
	res.send({ id, name });
});

app.listen(5000, () => console.log('Listening to port 5000'));
