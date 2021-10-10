const filesToCache = [
	"AdventureGame.htm",
	"AdventureGame.json",
	"AdventureGame.png",
	"AdventureGameFavIcon_16x16.png",
	"AdventureGameFavIcon_192x192.png",
	"AdventureGameFavIcon_512x512.png",
	"AdventureGameGame.htm",
	"AdventureGameGame.js",
	"AdventureGameShare.png"
];

const staticCacheName = "adventuregame-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});