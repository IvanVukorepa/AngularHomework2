angular.module('students').config(function ($stateProvider) {
	$stateProvider
		.state('details', {
			url: '/details/:firstName',
			controller: 'detailsController',
			template: `
			<h3>Details:<h3>
            <h2>{{firstName}} {{lastName}}</h2>
            <h2>Grade: {{grade}}</h2>
            <button ui-sref="listAll">Go back</button>
       `,
			params: {
				firstName: null,
				lastName: null,
				grade: 0
			}
		});
});