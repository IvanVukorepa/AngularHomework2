angular.module('students').config(function ($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'homeController',
			template: `
            <h1>Student directory</h1>
            <button ui-sref="listAll">View all students</button>
       `
		});
});