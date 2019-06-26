

//Event listener to cache array with offline content files
self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open("v1").then(function(cache){
            return cache.addAll([
                "/",
                "/index.html",
                "/restaurant.html",
                "/css/styles.css",
                "/data/restaurants.json",
                "/img/1.jpg",
                "/img/2.jpg",
                "/img/3.jpg",
                "/img/4.jpg",
                "/img/5.jpg",
                "/img/6.jpg",
                "/img/7.jpg",
                "/img/8.jpg",
                "/img/9.jpg",
                "/img/10.jpg",
                "/js/dbhelper.js",
                "/js/main.js",
                "/js/restaurant_info.js",
                "/js/sw_register.js"
            ]);
        })
    );
});

//Listening for a fetch event,checking if url was already cached
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if (response){
                return response;
//If it isn't feched, add it to the cache
            } else {
                return fetch(event.request)

                .then(function(response) {
                return caches.open("v1").then(function(cache){
//response.clone() is a error fix("Response body is already used")
                cache.put(event.request, response.clone());
                return response;
                });
                }).catch(function(err){
                console.error("Fetching failed", err);
                throw err;
                })
            }
        })
    );
});
