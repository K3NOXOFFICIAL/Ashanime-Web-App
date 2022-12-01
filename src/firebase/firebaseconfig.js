<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  const firebaseConfig = {
    apiKey: "AIzaSyBw6omUq-xqkj4NWtZchDTCqZolxyJf-f4",
    authDomain: "anime-beta-75ce4.firebaseapp.com",
    databaseURL: "https://anime-beta-75ce4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "anime-beta-75ce4",
    storageBucket: "anime-beta-75ce4.appspot.com",
    messagingSenderId: "7065378517",
    appId: "1:7065378517:web:88cb2afd6981dc3dca8c5c",
    measurementId: "G-QLJ4J38G93"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>