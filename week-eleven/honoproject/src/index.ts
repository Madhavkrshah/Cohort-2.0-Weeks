import { Hono } from 'hono';

const app = new Hono();

app.post('/', async (c) => {
	let body = {};

	try {
		body = await c.req.json();
	} catch (error) {
		return c.json({error: 'Invalid or missing JSON body'},400)
	}

	console.log(body);
	console.log(c.req.header('Authorization'));
	console.log(c.req.query('param'));

	return c.text('Hello Hono!');
});

export default app;
