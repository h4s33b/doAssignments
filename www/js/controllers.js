angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaSQLite) {
  $scope.save = function(newMessage) {
    $cordovaSQLite.execute(db, 'INSERT INTO Assignments (course) VALUES (?)', [newMessage])
        .then(function(result) {
            $scope.statusMessage = "Message saved successful, cheers!";
        }, function(error) {
            $scope.statusMessage = "Error on saving: " + error.message;
        })
 
  }
  $scope.newMessage2 = [];
  $scope.load = function() {
 
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM Assignments')
            .then(
                function(result) {
 
                    if (result.rows.length != 0) {
                        for(k=0;k<result.rows.length;k++){
                          $scope.newMessage2.push(result.rows.item(k).course);  
                        }
                        //$scope.newMessage2 = result.rows.item(0).course;
                        console.log($scope.newMessage2);
                        $scope.statusMessage = "Message loaded successful, cheers!";
                    }
                },
                function(error) {
                    $scope.statusMessage = "Error on loading: " + error.message;
                }
            );
    }
  /*var options = {
  date: new Date(),
  mode: 'date'
  };

  $scope.launch = function(){
      var dlg = dialogs.create('/dialogs/custom.html','customDialogCtrl',$scope.data);
      dlg.result.then(function(data){
        $scope.data = data;
      });
    }; */

    //== Variables ==//
    /*$scope.data = {
      dt: new Date()
    };
    
    //== Methods ==//
    $scope.launch = function(){
      var dlg = dialogs.create('/dialogs/custom.html','customDialogCtrl',$scope.data);
      dlg.result.then(function(data){
        $scope.data = data;
      });
    };*/
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
