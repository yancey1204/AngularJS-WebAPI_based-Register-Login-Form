var app = angular.module("AccountModule", []);
app.controller("RegisterController", ["$scope", "$http", "$window", function ($scope, $http, $window) {

    // show the register login form and display greating message if cookie not exist
    $http.get("http://localhost:55752/Home/Login").success(function (data) {
        if (data == true) $(".RegisterLoginForm").hide();
    });

    // display all of the users
    $http.get("http://localhost:55752/Home").success(function (data) {
        $scope.users = data;
    })
      .error(function () {
          $scope.error = "An Error has occured while loading posts!";
      });

    // add new user
    $scope.addUser = function () {
        $http.post("http://localhost:55752/Home/register", this.newUser).success(function (data) {
            alert("Added Successfully!!");
            $scope.users.push(data);
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding Friend! " + data;
        });
    };

    // logout
    $scope.logout = function () {
        $http.get("http://localhost:55752/Home/LogOut").success(function () {
            $window.location.reload();
        });
    };
}]);



