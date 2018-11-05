
(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCbhpvjvE1yvJSzNNorpXa0U5I-dBUYWBo",
        authDomain: "dearkbib.firebaseapp.com",
        databaseURL: "https://dearkbib.firebaseio.com",
        projectId: "dearkbib",
        storageBucket: "dearkbib.appspot.com",
        messagingSenderId: "617288237445"
      };
      firebase.initializeApp(config);

    //get elements

    const preObject = document.getElementById('object');

    //create references

    const dbRefObject = firebase.database().ref .child('object');

    //sync boject change

    dbRefObject.on('value', snap => conssole.log(snap.val()));
}());
  
  
