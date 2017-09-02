
angular.module('students').config(function ($stateProvider) {
	$stateProvider
		.state('add', {
			url: '/students/addNew',
			controller: 'addController',
			template: `
                <button ui-sref="listAll">Back</button>
                <div>
                    <span>First name</span>
                    <input type="text" ng-model="firstName">
                </div>
                <div>
                    <span>Last name</span>
                    <input type="text" ng-model="lastName">
                </div>
                <div>
                    <span>Grade</span>
                    <input type="number" min="1" max="5" ng-model="grade">
                </div>
                    <button ng-disabled="!(firstName && lastName && grade)"
                            ng-click="submitStudent()">Submit student</button>

            `
		});
});