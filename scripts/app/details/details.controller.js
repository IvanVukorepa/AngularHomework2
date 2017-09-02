angular.module('students').controller('detailsController', function ($scope, $stateParams) {
    $scope.firstName = $stateParams.firstName;
    $scope.lastName = $stateParams.lastName;
    $scope.grade = $stateParams.grade;
});