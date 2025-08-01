importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

// Тот же конфиг Firebase
firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

// Обработчик фоновых уведомлений
messaging.onBackgroundMessage(payload => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: 'icon.png',
        vibrate: [200, 100, 200]
    });
});
