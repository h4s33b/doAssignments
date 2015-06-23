angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
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
