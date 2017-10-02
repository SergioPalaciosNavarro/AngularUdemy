(function () {//si encapsulamos las funciones será más difícil que las editen desde fuera
    var app = angular.module('anvengersApp', []);

    app.controller('listadoCtrl', ['$scope', function ($scope) {
        $scope.listado = ["Steve Rogers", "Natasha Romanoff", "Tony Stark"];
        $scope.listadoavengers = {
            avengers: [{
                nombre: "Natasha Romanoff",
                edad: 30,
                apodo: "Viuda Negra"
            },
            {
                nombre: "Steve Rogers",
                edad: 97,
                apodo: "Capitán América"
            },
            {
                nombre: "Tony Stark",
                edad: 43,
                apodo: "Ironman"
            }]
        };
    }]);
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

        $scope.mostrarselect = false;
        element.all(by.model('heroeseleccionado')).first().click() = seleccionado;
        if (myHeroe !=null) {
            $scope.heroeS = myHeroe.id;
            $scope.mostrarselect = true;
        }



        
    }]);
})();

