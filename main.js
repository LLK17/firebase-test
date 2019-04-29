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
      var data=snapshot.val();
      var userPull = document.createElement('p');
      var userPullNode=document.createTextNode(data.Username);
      userPull.appendChild(userPullNode);
      console.log(data);
      document.getElementById('display').appendChild(userPull);
      // var namePull = document.createElement('p');
      // var namePullNode = document.createTextNode(data.name);
      // namePull.appendChild(namePullNode);
      // document.getElementById('display').appendChild(namePull);
      // var emailPull = document.createElement('p');
      // var emailPullNode = document.createTextNode(data.email);
      // emailPull.appendChild(emailPullNode);
      // document.getElementById('display').appendChild(emailPull);
      // var phonePull = document.createElement('p');
      // var phonePullNode = document.createTextNode(data.phone_number);
      // phonePull.appendChild(phonePullNode);
      // document.getElementById('display').appendChild(phonePull);
      // console.log(data);

    } )

  };

}
