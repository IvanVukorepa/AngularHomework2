// @ts-nocheck
var app = angular.module('students', ['ui.router', 'LocalStorageModule']);

app.run(function (localStorageService) {
    if (!localStorageService.get('students2'))
        localStorageService.set('students2', [
            { firstName: "Ivica", lastName: "Ivić", grade: 2 },
            { firstName: "Mate", lastName: "Matić", grade: 3},
            { firstName: "Ivana", lastName: "Ivanić", grade: 4 },
        ]);
});