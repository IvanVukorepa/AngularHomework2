angular.module('students').controller('addController', function ($scope, localStorageService) {
    $scope.students = localStorageService.get('students2') || [];

    $scope.submitStudent = function() {
        $scope.students.push({
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            grade: $scope.grade
        });
        localStorageService.set('students2', $scope.students);
        $scope.firstName = null;
        $scope.lastName = null;
        $scope.grade = null;
    }
});