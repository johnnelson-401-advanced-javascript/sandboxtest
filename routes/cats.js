
const routes = {
	cats: (req, res) => {
		res.end(JSON.stringify([
			{ name: 'garfield' },
			{ name: 'duchess' },
			{ name: 'felix' },
		]));
	};

const methods = {
	GET: get,
	POST: post
};

module.exports = (req, res) => {
	const handler = methods[req.url];
	handler(req, res);
};