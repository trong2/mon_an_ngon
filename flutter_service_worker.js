'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f701194882c7d1a4539fe21660de1320",
"assets/assets/images/background/background_product.png": "089adb9e1cb59a0335545429b6ffde84",
"assets/assets/images/category/c1.png": "9cdb726b4e0868a0ce2df2f4c0897830",
"assets/assets/images/category/c2.png": "bceffbb1b5f427d320c3d36f4098b139",
"assets/assets/images/category/c3.png": "8732166d66a9ae478741ec371539608c",
"assets/assets/images/category/c4.png": "8bd128ae8db1c5b4c49afec5a91e234d",
"assets/assets/images/category/c5.png": "f4402683f871da80cb96af4af29b76c7",
"assets/assets/images/category/c6.png": "3683d77dd90cf32ea32e644dbe078e7d",
"assets/assets/images/meal/m1.png": "b858e2bcc3014d0e921302d6184691f5",
"assets/assets/images/meal/m10.png": "42b9ac949890eb621a3a03ab92ff7f55",
"assets/assets/images/meal/m11.png": "098f750e56acfaeb01a9ac3ccde038a5",
"assets/assets/images/meal/m12.png": "73b0229037bc57cf6220781b942801b1",
"assets/assets/images/meal/m13.png": "d393ed9d62e4b6567fcf81d54309f1b3",
"assets/assets/images/meal/m14.png": "b918132dac7a083cc347b29d9ea720a4",
"assets/assets/images/meal/m15.png": "437b7fc19130177fef9c7dfd0b3b4dd1",
"assets/assets/images/meal/m16.png": "e41dd9b828a337d16c8d4b582923ff88",
"assets/assets/images/meal/m17.png": "8a462e3d0443ed4d76d13aeb06ec8899",
"assets/assets/images/meal/m18.png": "98b9e0c6c98fe84f02adccdee82aaaa3",
"assets/assets/images/meal/m19.png": "a791c5bff2ea1b28c363a61963e457d0",
"assets/assets/images/meal/m2.png": "3c0e4560c7438b1b73d0336d27992cad",
"assets/assets/images/meal/m20.png": "4927e9a45827cc1b0a167c7e1353af57",
"assets/assets/images/meal/m21.png": "0eee8f7ca76574dcc1f9734fe4fc349a",
"assets/assets/images/meal/m22.png": "f1efcd8aaf62c183826cf00262ee4758",
"assets/assets/images/meal/m23.png": "3654b342c56dc07dea32f1900d984926",
"assets/assets/images/meal/m24.png": "337ad1221d0a8418636f9ab81b9d38c4",
"assets/assets/images/meal/m25.png": "98e843834528f236d4cc37532e40d830",
"assets/assets/images/meal/m26.png": "8f91a245496bd6a6ab3c964cc547e85a",
"assets/assets/images/meal/m27.png": "290560b6c461d4927329dd1bf2cbeb49",
"assets/assets/images/meal/m28.png": "2d8c5d6a5c91d42c2b27d88b958b495a",
"assets/assets/images/meal/m29.png": "f3b657ede80f955d91372e1db502371d",
"assets/assets/images/meal/m3.png": "c8960ef3c69502a027a6418f51ce1c69",
"assets/assets/images/meal/m30.png": "320c686c1e8db0a05dd36ae7fa165d91",
"assets/assets/images/meal/m31.png": "cdd244e9f53ded745a671c0feb389347",
"assets/assets/images/meal/m32.png": "f3b350b200fd5091ea9cf154f91a5404",
"assets/assets/images/meal/m33.png": "2267cdbb4d1e145b3fe41527da104e53",
"assets/assets/images/meal/m34.png": "c563a1ca33b0d2d8adf4fd02e87dd93d",
"assets/assets/images/meal/m35.png": "c8d42cbeb591660264aaf3e142196269",
"assets/assets/images/meal/m36.png": "022e435b2e9ec06ad41be34344186150",
"assets/assets/images/meal/m4.png": "c3275a2a5cd79f0a59bc18a5b7acd175",
"assets/assets/images/meal/m5.png": "504768d96d07c9a1002f280836fcca9f",
"assets/assets/images/meal/m6.png": "e0c770b635f6d167a9150eceb38dc16f",
"assets/assets/images/meal/m7.png": "8265beabaf3aa49639cbc961a3dc4068",
"assets/assets/images/meal/m8.png": "8de8f35093ab7c09a5beb4c7c4fa2e09",
"assets/assets/images/meal/m9.png": "a01a2e4563bb233cced08d25b9435536",
"assets/assets/json/category.json": "d76aaa8c8aa60f10a0bc4ef6eb7f0d4e",
"assets/assets/json/product.json": "3e6f226ee3dce0067f73e83b5dfff404",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ff8afc554dbfdb965f57320952df3fb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9eb8fc223924c3d5fbbc63bcf829a38",
"/": "e9eb8fc223924c3d5fbbc63bcf829a38",
"main.dart.js": "b08b59d30c932ee7adc01667e3ad6dc4",
"manifest.json": "add3444b8eb8c69ab363253852a8d610",
"version.json": "debc17ed17602ca1a37890805f1246b9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
