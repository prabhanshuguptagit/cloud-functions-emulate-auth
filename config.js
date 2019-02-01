// Add config
firebase.initializeApp({
    apiKey: "#####################################",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
});

firebase.functions().useFunctionsEmulator('http://localhost:5000');

// Initialize Cloud Functions through Firebase
try
{
	var functions = firebase.functions();
	var db = firebase.firestore();
	db.settings({ timestampsInSnapshots: true });
}
catch
{
	alert('Error in firebase initialisation, check console.\nMake sure you have added your keys in config.js');
}

// Set REQUIRE_AUTHENTICATION to true if functions require authentication
var REQUIRE_AUTHENTICATION = false;
var TEST_EMAIL = "me@example.com";
var TEST_PASSWORD = "hello123";

if(REQUIRE_AUTHENTICATION)
  login(TEST_EMAIL, TEST_PASSWORD);  //Only email auth added 
else
  nologin();