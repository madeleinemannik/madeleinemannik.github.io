var app = angular.module("app", ["firebase"]);


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-f43qp8WmqnuW3fzGNpnDB2bG6z501mM",
    authDomain: "hemsida-kommentarer.firebaseapp.com",
    databaseURL: "https://hemsida-kommentarer.firebaseio.com",
    projectId: "hemsida-kommentarer",
    storageBucket: "hemsida-kommentarer.appspot.com",
    messagingSenderId: "90787450457"
  };
  firebase.initializeApp(config);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
      // Här skriver vi kod för controllern
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };

    $scope.addComment = function() {
        // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
        // Det sparas automatiskt i Firebase-databasen.
        $scope.kommentarer.$add($scope.kommentar);

        // Tömmer texten i kommentarfältet
        $scope.kommentar = {
            text: "",
            skribent: ""
        };
    };
  }
);
