// JavaScript source code
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase/firebase-database.js';
const firebaseConfig = {
    apiKey: "AIzaSyBk4D0bAqiFUWcdQwDxzygtmNXnaL_feMM",
    authDomain: "firstwebapp-71ba8.firebaseapp.com",
    projectId: "firstwebapp-71ba8",
    storageBucket: "firstwebapp-71ba8.appspot.com",
    messagingSenderId: "1021876104089",
    appId: "1:1021876104089:web:032819097e12d027fe0108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const colorPicker = new iro.ColorPicker('#picker', {
    borderColor: "#ffffff",
    borderWidth: 1,
    width: Math.round(document.documentElement.clientWidth / 1.5),
});
colorPicker.on('color:change', function (color) {
    document.body.style.background = color.hexString;
});

Telegram.WebApp.ready();
Telegram.WebApp.MainButton.setText('Выберите цвет').show().onClick(function () {
    const data = JSON.stringify({ hex: colorPicker.color.hexString, rgb: colorPicker.color.rgb });
    Telegram.WebApp.sendData(data);
    // Telegram.WebApp.close(); 
});