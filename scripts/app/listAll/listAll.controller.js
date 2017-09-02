angular.module('students').controller('listAllController', function ($scope, localStorageService) {
    $scope.students = localStorageService.get('students2') || [];

    $scope.removeStudent = function(student) {
        $scope.students.splice($scope.students.indexOf(student), 1);
        localStorageService.set('students2', $scope.students);
    }
})