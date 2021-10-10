const filesToCache = [
	"Adventure.htm",
	"Adventure.json",
	"Adventure.png",
	"AdventureFavIcon_16x16.png",
	"AdventureFavIcon_192x192.png",
	"AdventureFavIcon_512x512.png",
	"AdventureGame.htm",
	"AdventureGame.js",
	"AdventureShare.png"
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