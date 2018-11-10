if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Yay! Your worker is registered!');
	})
	.catch(function() {
		console.log('Oops! Your worker registration failed!');
	});
}
