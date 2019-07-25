const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello');
	process.exit(1);
});

app.listen(300, () => {
	console.log('App listening on port 3000');
});

const obj = {
	hello: function() {
		console.log('hello');
	}
};
