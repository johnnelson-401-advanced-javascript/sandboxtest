const net = require('net');

const httpResponse = html =>
`HTTP/1.1 200 OK
Date: ${new Date().toUTCString()}
Content-Type: text.html; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: ${json.length}
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Our Simple TCP server
Connection: close

${json}
`;

const server = net.createServer(client => {

	console.log('a client connected\n\n\n');
	client.setEncoding('utf-8');
		
	client.on('data', data => {
		// console.log(data);
		let html = '<h1>Hello World</h1>';
		const json = JSON.stringify({
			greeting: 'hello',
			name: 'World'
		});
		client.write(httpResponse(html));
		client.end();
	});
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(
		'tcp server listening on port',
		PORT
	)
});