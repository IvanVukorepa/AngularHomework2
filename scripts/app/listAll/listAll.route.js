angular.module('students').config(function ($stateProvider) {
	$stateProvider
		.state('listAll', {
			url: '/students',
			controller: 'listAllController',
			template: `
            <button ui-sref="home">home</button>            
            <h3>Students:</h3>
            <div ng-repeat="student in students">
                {{student.firstName}} {{student.lastName}}
                <button ui-sref="details( { firstName: student.firstName, lastName: student.lastName, grade: student.grade})">Details</button>
                <button ng-click=removeStudent(student)>Remove</button>
            </div>
            <button ui-sref="add">Add a new student</button>
       `
		});
});