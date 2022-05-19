// Views

// Routes
const routes = [
	{
		path: '',
		element: <h1>Welcome to infogame-client</h1>
	},
	{
		path: '*',
		element: <h1>404 - path not found</h1>
	}
];

export default routes;
