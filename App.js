var firebaseConfig = {
  apiKey: "AIzaSyA5fWZtXFbUI2GFlrgK7D3UyavitlNnorE",
  authDomain: "my-asan-quran-websites.firebaseapp.com",
  projectId: "my-asan-quran-websites",
  storageBucket: "my-asan-quran-websites.appspot.com",
  messagingSenderId: "57435633440",
  appId: "1:57435633440:web:3a0d7002e98bc489b90945"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// console.log(app)

function getValue(){
    var email = document.getElementById("email")
    var password = document.getElementById("pass")
    console.log(email.value,password.value)

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}

function getSignin(){
    var Email = document.getElementById("Eamil")
    var Password = document.getElementById("Password")
    console.log(Email.value,Password.value)

    firebase.auth().signInWithEmailAndPassword(Email.value,Password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}