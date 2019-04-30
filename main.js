window.onload=function(){

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBU5-ACeGESKeG_xj_WvYgksW4pVH7ig7E",
      authDomain: "fir-test-2-79e63.firebaseapp.com",
      databaseURL: "https://fir-test-2-79e63.firebaseio.com",
      projectId: "fir-test-2-79e63",
      storageBucket: "fir-test-2-79e63.appspot.com",
      messagingSenderId: "206356531709"
    };

  firebase.initializeApp(config);

  //database reference shorthand
  var database = firebase.database();

  document.getElementById('set').onclick = setUserData;
  document.getElementById('pull').onclick = retrieve;

  function setUserData(){
    //user variables
    var userName=document.getElementById('userName').value;
    var name= document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phoneNumber=document.getElementById('phoneNumber').value;
    database.ref('users/' + userName).set({
      Username: userName,
      Name: name,
      Email: email,
      Phone_number: phoneNumber,
    });
  };



  function retrieve(){
    database.ref('users').once('value', function(snapshot){

      //For each loop to go through each child returned as part of the snapshot.
      snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

      //Create Username <p> tag and add username
      var userPull = document.createElement('p');
      var userPullNode=document.createTextNode(childData.Username);
      userPull.appendChild(userPullNode);
      document.getElementById('display').appendChild(userPull);

      //Create Name <p> tag and add name
      var namePull = document.createElement('p');
      var namePullNode = document.createTextNode(childData.Name);
      namePull.appendChild(namePullNode);
      document.getElementById('display').appendChild(namePull);

      //Create Email <p> tag and add email
      var emailPull = document.createElement('p');
      var emailPullNode = document.createTextNode(childData.Email);
      emailPull.appendChild(emailPullNode);
      document.getElementById('display').appendChild(emailPull);

      //Create Phone number <p> tag and add phone number
      var phonePull = document.createElement('p');
      var phonePullNode = document.createTextNode(childData.Phone_number);
      phonePull.appendChild(phonePullNode);
      document.getElementById('display').appendChild(phonePull);


    });



    } )

  };

}
