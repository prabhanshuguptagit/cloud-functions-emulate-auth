var login = function(TEST_EMAIL, TEST_PASSWORD) {
  //Change these
  try {
    console.log('dwedweduihu');
    firebase
    .auth()
    .signInWithEmailAndPassword(TEST_EMAIL, TEST_PASSWORD)
    .then(
      user => {
        console.log(user);

        // db.collection("admins")
        //   .doc(user.user.email)
        //   .get()
        //   .then(doc => {
        //     if (doc.exists) {
        //       console.log("yes");
        //       console.log(doc.data());
        //     } else {
        //       console.log("no");
        //     }
        //   });

        console.log(firebase.auth().currentUser.email, "logged in");
        document.getElementById('tokenLocation').innerHTML += 'Logged in as: '+ firebase.auth().currentUser.email;
        removespinner();
      }
    );
  }
  catch(e)
  {
    alert('Error in sign in. Check console.');
    console.log(e);
  }
}

var nologin = function() {
  document.getElementById('token').style.display = "none";
  document.getElementById('tokenLocation').innerHTML += 'No auth';
  removespinner();
}

var removespinner = function()
{
  document.getElementById('token-spinner').style.display = "none";
  document.getElementById('tokenLocation').style.display = "block";
  document.getElementById("functionForm").disabled = false;
  document.getElementById("functionSubmitBtn").disabled = false;
}

var submitFunction = function(event) {
  var functionName = document.getElementById("functionName").value;

  try {
    var jsonData = JSON.parse(document.getElementById("jsonData").value);
  }
  catch(e) 
  {
    alert('Validate JSON.\nMake sure everything is in double quotes.');
    console.log(e);
    return false;
  }

  try 
  {
    var func = firebase.functions().httpsCallable(functionName);
    document.getElementById('responseMessage').style.display = "none";
    document.getElementById('response-spinner').style.display = "block";
    func(jsonData)
    .then(function(result) {
      document.getElementById('responses').innerHTML = '<div>' + JSON.stringify(result) + '</div><br>' + document.getElementById('responses').innerHTML;
      document.getElementById('responses').style.display = "block";
      
      document.getElementById('response-spinner').style.display = "none";
      document.getElementById('responseMessage').style.display = "block";

      document.getElementById('errorMessage').style.display = "none";
    })
    .catch(function(error)
    { 
      alert('Error. Check console.')
      document.getElementById('response-spinner').style.display = "none";
      document.getElementById('errorMessage').style.display = "block";
      console.log(error);
    })
  }
  catch(e)
  {
    alert('Error in function call. Check console');
    console.log(e);
  }
}