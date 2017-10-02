(function () {
    var app = angular.module('anvengersApp', []);
    app.controller('heroesCtrl', ['$scope', function ($scope) {
        $scope.marvelheroes = [
           {
               "id": 0,
               "nombre": "Natasha Romanoff",
               "edad": 30,
               "imagen": "viuda.jpg",
               "nacionalidad": "Russian",
               "apodo": "Viuda Negra"
           },
           {
               "id": 1,
               "nombre": "Steve Rogers",
               "edad": 97,
               "imagen": "captain.jpg",
               "nacionalidad": "American",
               "apodo": "Capitán América"
           },
           {
               "id": 2,
               "nombre": "Tony Stark",
               "edad": 43,
               "imagen": "tony.jpg",
               "nacionalidad": "American",
               "apodo": "Ironman"
           },
           {
               "id": 3,
               "nombre": "Peter Parker",
               "edad": 24,
               "imagen": "spiderman.jpg",
               "nacionalidad": "American",
               "apodo": "Spiderman"
           },
           {
               "id": 4,
               "nombre": "Thor Odinson",
               "edad": 2000,
               "imagen": "thor.jpg",
               "nacionalidad": "Asgardian",
               "apodo": "Dios del Trueno"
           },
           {
               "id": 5,
               "nombre": "Pietro Maximoff",
               "edad": 26,
               "imagen": "mercurio.jpg",
               "nacionalidad": "Romanian",
               "apodo": "Quicksilver"
           },
           {
               "id": 6,
               "nombre": "Wanda Maximoff",
               "edad": 26,
               "imagen": "bruja.jpg",
               "nacionalidad": "Romanian",
               "apodo": "Bruja Escarlata"
           },
           {
               "id": 7,
               "nombre": "Ororo Munroe",
               "edad": 35,
               "imagen": "tormenta.jpg",
               "nacionalidad": "American",
               "apodo": "Tormenta"
           },
           {
               "id": 8,
               "nombre": "Peter Quill",
               "edad": 37,
               "imagen": "starlord.jpg",
               "nacionalidad": "American",
               "apodo": "Star-Lord"
           },
           {
               "id": 9,
               "nombre": "Stephen Strange",
               "edad": 43,
               "imagen": "strange.jpg",
               "nacionalidad": "American",
               "apodo": "Doctor Strange"
           }];

    }]);
})();

