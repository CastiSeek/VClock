const CACHE_NAME = 'gentle-alarm-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Alarms/001.mp3',
  '/Alarms/002.mp3',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('message', event => {
  if (event.data.action === 'triggerAlarm') {
    self.registration.showNotification('Wake Up!', {
      body: 'Your alarm is going off!',
      icon: 'icon-192.png',
      vibrate: [200, 100, 200, 100, 200]
    });
  }
});