const http = require('http');

// GET /api/cats
//GET /api/movies
//POST /api/cats

const routes = {
	cats: (req, res) => {
		res.end(JSON.stringify([
			{ name: 'garfield' },
			{ name: 'duchess' },
			{ name: 'felix' },
		]))
	}

}


const server = http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.method);


	res.statusCode = 200;
	
	if(req.url.startsWith('/api')) {
		res.setHeader('content-type', 'application/json');



		if(req.method === GET) {
			//get the cats
			res.end(JSON.stringify([
				{ name: 'felix' },
				{ name: 'duchess' }
			]));
		}
	
	}
	if(req.url.startsWith('/api/movies')) {
		
	
	}
	else{
		res.statusCode = 400;
		res.write(JSON.stringify({
			error: 'only /api routes are supported'
		}));
		res.end();
	}
	

});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(
		'tcp server listening on port',
		PORT
	)
});