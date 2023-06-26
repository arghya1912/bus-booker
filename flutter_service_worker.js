'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2dfb6a9887b2e790856aa6ccba175526",
".git/config": "448b906d6d3719856481bb7cd91ec94d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "820bffd0edefe4962673f7f826faafda",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1a71d70378e37150082fe5db14de2e6a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8062c24cb21a726a6e69c52133dce2b8",
".git/logs/refs/heads/master": "8062c24cb21a726a6e69c52133dce2b8",
".git/logs/refs/remotes/origin/master": "e517478f4b780fe9eb7e461f37be8ac9",
".git/objects/04/7d94001c2fd8dddc170009a319935a87e5a962": "c086de496469b77eac775ecba4395fea",
".git/objects/05/a3747ba7783e20c1afb24c5c3d2b8bce6db60e": "300c36ebafe948cf28cb73990dfb9f17",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/08/73d1781c6c54d16bdbde0901ffe786f9f0990d": "f9678b74a41a8538fef3cbe66689f61f",
".git/objects/09/121ce178ac48506349f8fcb6446d2830ce0437": "4f854eaebee838535042b1ba26aa1b13",
".git/objects/0b/9df1d2a65b7b7cfac68d117152f6b2999400a9": "288fb02793b9ef8e08d2d4390e2d8ea7",
".git/objects/0e/7f94a258e35280b840ce4b92eeae746ff2fbb4": "8195046ab4112c03ba9f79d4fd6a96f0",
".git/objects/10/f2d6ad4ee82a96e3810b35cced31be1eaa2e17": "eb8e9fc6afd591ba760cf8c4f3311b9e",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/15a709e679bee1a340e8e8cc7874dfa3228c39": "a07805504d4040109595a5b8c2c00639",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/f2e7604a10db8c545e58c6f0eb1bfe78015417": "43a8f67ec6af5fa7b96fdfd77326f363",
".git/objects/25/3714f77dfcdd02b1fb21bef330ba94123fdc84": "6c17dc079d4da030359ec0ab555b03ff",
".git/objects/28/9c5e2bb90af882d96faad366b361b41c81f29e": "e77e65f68bdb342a95db324bc84fc58f",
".git/objects/28/e6dcd1ccc86e2d123476cc9a3169ae927e25d4": "15093c76ed3f0ef985e18b7a9ef48a79",
".git/objects/2c/c36075a731ee5bb11f0f107e9a078d36041a41": "5bcb78cf1b881f8b330fee12dc05d360",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/385bff90f6d36e191f041b2367499dd40a4764": "3a94836706a1b0c3b9b24726c1900813",
".git/objects/31/90e428db7b80cfc496572456d14ceb8eecd4fa": "50283f40b0368e579941ee95ec00b36c",
".git/objects/31/eee8b1cf78057295a0379af8709b92f31f74e7": "0d1a45a3cdc6050e6b70e2ecece12d92",
".git/objects/34/1d48e49e2caa36d0593f86b8d392f0c156f649": "31e7626045a788995dd26c11102e52e7",
".git/objects/34/ae61d1eaf9fa28b48952494b0442c6d60f06b2": "01b7e1610b5d83593bfd8d6582af2c30",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/2410482129ea1326691f59d06c6076912031f4": "32fc73313f549c7916c653772856aaef",
".git/objects/3b/60e6be68bdc38f0c77528851b75f40476b5990": "b4efc30ec8d3f00a1573127f915bf620",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/9c103b2a7c510aa4d280b342bf6e738046270a": "55edf48340c93156026f839b3f7af9c9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/a02ee1d0e40277c82134f2efa049bdf7232dca": "fb1be1df0b67e9e9b3a5a71b8a68ffcf",
".git/objects/42/e839dcf14fa3e8ae0844aa7987f37c84d89380": "c62cbd766895ed3081a3548f93a93a3a",
".git/objects/43/905faf794f592ea5505e34d9008010a785c991": "c47c69bf5323fb76eeb7658080294582",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/abc8186e392c94c0aa5bc0716dd2f8e93df79e": "1d9811b69de5b0cc25bddc296fa98dc2",
".git/objects/4a/d70ae744428f7475a8dfadb7c42e2dd351c396": "a15756f97cc66903318b02d2748f8477",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/1028d04c860c1bb9249eb588b8eec96031b8e8": "e799a4c6cc9387f7230df9423498b198",
".git/objects/4c/8389d2c7b2393a012b797a6af67defa8630546": "581a2f97aebe0e2520d2d9c07b2d8078",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/d492fbc5e03ce6dfd9d69a60b2c4d7839d6607": "ff17a9562b37a679cb881bcc61f9f2be",
".git/objects/5a/b41627519836d3cfc915f40c08e459087527a8": "4c94e9528e0030c5425ef8bd280ee84d",
".git/objects/5b/afdf0c9d7434568b019bc482dae31e09bd5755": "db0c1261b78c0c002451470161ac5b85",
".git/objects/61/914b06cdcf0bba75b29ca2f02f6249d18368f9": "3a95b9c55e518692bd9cbdcd2d4b3407",
".git/objects/62/960db36a66a580fc52f4d15b472c964860b6e0": "fa724312db12fa67d56472df112c0b80",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/f8f05a7f394e97c8cbadbb3a133ec782c6b09b": "8240d49c3f5cc13a408b61fcd3871415",
".git/objects/72/fd1e4fc824d93c89a87860c62d6fffa6cc019a": "a7e427c04685af08c2930f3496740ee1",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/212cab613d1674acf1e25cbcd778cea1b47492": "1c75a6d2659895384d1c0907aaf137dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0494a2ca0a47a6fb655c596d60560965c472cc": "37317759a6f1e0ec0092b904d1311bf7",
".git/objects/7d/edc3213dc69f8b60af322c0fad1ac7db509f9b": "b341b1bc3af4f70075288ad92161219c",
".git/objects/82/78583c672edde3f23cc4810986cdd3a5c07c88": "33ce1cc805ad5b137e56c441ebd77673",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/02d24f1fbeae324f9505edc3b1cd2ffac6810f": "4ca8461538e7245be90df6bc310b7fed",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/78bd11e014b5686f3d097c6c96f8fa38167af0": "0a37cd268df36bd69766caa943d960d8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/de6f4ad2c98c5cecb3c3d9748bcb00c9712782": "8cbab6da3005ef8a4dfdb9fc20d36975",
".git/objects/9e/e82edbdd7a6858d1783afaea5c9117c6eb14a3": "92473773a37d97affc8ff05fd85041b9",
".git/objects/a0/b87cef8cddadd288fb0d19d07d51c09fb0ea79": "e3be7b6e63f7151412f55d45b1333fd4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/917ce43a52368314417fd1c66ba6dbc6666ff5": "88ac1455c8372eb52dae0d6359a8938b",
".git/objects/a7/881e6949f3e47f0cffd33753a0445886b5ca71": "48649c4ecf3ae89de3f7a865302122fa",
".git/objects/a9/126bb8b57adecac4c4d5251021f024666d8f72": "ee7176e5f60377ff72181184aeaa9678",
".git/objects/aa/3ac7527250c3615240fc24a7810319d71f1013": "e90e100098ba9fee735b521a3e30d4c6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b4/3029db9d99067f0d22098fd7db000bb884b5b9": "18b9cb1cfdb5f7db26b6d380dd132102",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c0efa1e4971a5fc44942c23b6ba211e6da59c7": "4572c955dfc056a60bc619cfb8a3f930",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/56dbb8b492973beb790ffb6f6b9c13c3a3456f": "0f67c6f82436289eff8b754fe7d2782c",
".git/objects/c0/16a7f7ef3a38cfa8d6023c41e019d26d0dc2bd": "b253c122c6dad9885f64f3f62af40d29",
".git/objects/c5/e3fe556dd5f4106d08a844488516a8512c1e2c": "5b43903e0381f8bba19722c692867ff6",
".git/objects/cb/3efb2915d3d59014bf8f6da04df7eb0034d34a": "26bfa8d23bbd124c791c512aded8987e",
".git/objects/cb/62091e106ab6edb134eeccb6fac25907cd9a6b": "d7e03b7a22fadaf9d84d8a56c83b78a4",
".git/objects/cc/af68a48392bbd310f7d83bf8dc8b49a6326604": "dd779c3abf99d63fed97d30e2ef7d0e5",
".git/objects/d0/98446858c02a319d5f5df45c5002a1eb78a984": "1778295dd9dce99b6df4a10775129067",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ae4425e23b74a5d7586951f1e79ffd6f85cd8b": "23d5d1a126221e71384fa30dafac118e",
".git/objects/db/1f204c0d33a57a2801ae46a831395d733bfbb3": "cbe285eccfd6ce2944184568b8e2caa3",
".git/objects/e4/6101548a1938d7d2fa2ef0cca5ec0709abfaed": "27f4ea36ddbf9f600aa65c303b668534",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/2f735379509112dcbda4430d1cf5f7746a206f": "d0005da98bee871bfd8eba6e06291135",
".git/objects/e7/f55a912bb2044a16a4e90e5317ef3947699d12": "258475ab2796149c68a31b35fdcab2c0",
".git/objects/e8/3a391d1b2c4e0040cde4611912a8bec543a9fb": "e2e077bcab8b18b64c4b338eca4166cd",
".git/objects/ea/c97f31018fc2abf9c42d89d91e5d52aea3a4de": "9c5522997144a14dc755048d50dd840f",
".git/objects/ea/d0ef5e9987c1bbd730c81aa761f8625e798f71": "7acc1de24e2f7360398fcac13f668205",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/6dd70ac97b4d77e72abe5421d8cb499d2e0066": "6198c17fe1fd203618bdd7135f20a2fa",
".git/objects/f4/b412a72443cd45b2df662eb67d6dd0f920a2d9": "c6bdadeb148a67af2de6e1b80cc56139",
".git/objects/f9/ede8ba443429746862843d4f4dc81081607475": "f9004c31a8c947aa9c2401e3d3e5bbab",
".git/objects/fb/80ea06dbe8e04d13dd40896297a40dba439f70": "910349376acba8f01bd6501260803d44",
".git/objects/fd/a5623612b2cad232dbdc07fc1dea538cccdd80": "fbe870269a651a0002b1964077b3eb9b",
".git/objects/fe/871f78115d8e37cb540f82214566a8f4bd5839": "c69ddc201bc8f973f6cbe91fec1a3ad1",
".git/objects/fe/cbba0fb17733d24bc6486394af863beb04dea6": "608bfa9723b2428ff4f7141e881c3d08",
".git/ORIG_HEAD": "a96a868f8dc700e5e41be287d98f0f82",
".git/refs/heads/master": "925c3c3c4264e6f881724ce87daee7bf",
".git/refs/remotes/origin/master": "925c3c3c4264e6f881724ce87daee7bf",
"assets/AssetManifest.json": "e5ec10f8a7e9618bb86965645615870d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6cc94f88fae041f17ced44c7e763c4c3",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d4aebc11f8b533f5a3c15e05a3ecc245",
"/": "d4aebc11f8b533f5a3c15e05a3ecc245",
"main.dart.js": "c816c0d3f9a5a2f3d8686730fbf6cd04",
"manifest.json": "2155cde89750f52d299b3dc78d9302a2",
"packages/model_viewer_plus/assets/model-viewer.min.js": "db4b0e8e0bd8ef29e79777cc58cbeddd",
"version.json": "de80146eff81280e8fbf890966e57cbe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
