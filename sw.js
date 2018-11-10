let myCache = 'restaurant-static-v1';

const cacheFiles = [
	'./',
	'./index.html',
	'./restaurant.html',
	'./css/styles.css',
	'./data/restaurants.json',
	'./js/dbhelper.js',
	'./js/main.js',
	'./js/restaurant_info.js',
	'./js/sw_register.js',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg'
];

self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(myCache).then(function(cache) {
			return cache.addAll(cacheFiles);
		})
	);
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request)
		.then(function(response) {
			if (response) {
				console.log(e.request + " found in cache");
				return response;
			} else {
				console.log(e.request + " not found in cache; fetching...");
				return fetch(e.request)
				.then(function(response){
					const clonedResponse = response.clone();
					caches.open("myCache").then(function(cache){
						cache.put(e.request, clonedResponse);
					})
					return response;
				})
				.catch(function(err){
					console.error(err);
				});
			}
		})
	);
});
