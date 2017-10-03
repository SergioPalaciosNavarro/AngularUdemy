(function () {
    var app = angular.module('anvengersApp', []);
    //$http sirve para solicitar servicios externos (json, web, etc)
    //como están el scope y el http se llama inyección
    app.controller('mineCtrl', ['$scope','$http', function ($scope,$http) {
        $scope.heroes = {};
        $http.get('js/heroes.json').success(function (data) {//data es un parámetro de retorno
            //cuando funciona la petición
            $scope.heroes = data.heroes;
            //puede dar error en chrome y otros por una cuestión de seguridad por no estar en el mismo dominio
        });
    }]);
    app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.heroes = {};
        $scope.TablaHeroes = 'shared/TablaHeroes.html';

        $http.get('js/heroes.json').success(function (data) {
            $scope.heroes = data.heroes;
        });
    }]);
    app.controller('meinCtrl', ['$scope', '$http', function ($scope, $http) {

        //http://www.geoplugin.net/json.gp?jsoncallback?JSON_CALLBACK
        //no es http.get porque es para archivos locales
        $scope.geo = {};
        $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback?JSON_CALLBACK').success(function (data) {
            $scope.geo = data;
        });

    }]);
    app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

        //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
        $scope.clima = {};

        $http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0')
            .success(function (data) {
                $scope.clima = data;
            });
        $scope.KtoC = function (k) {
            c = k - 273.15;
            c = Math.round(c * 100)/100;
            return c;
        }
    }]);
})();

