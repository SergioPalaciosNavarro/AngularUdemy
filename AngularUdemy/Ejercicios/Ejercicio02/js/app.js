(function () {
    var app = angular.module('anvengersApp', []);

//Esta manera no es muy eficiente por el hecho de guardar cambios al mismo tiempo que se van editando
//app.controller('captainCtrl', function () {
//    this.captain = captainData; //creando dentro del controlador una propiedad y tendrá los valores de captainData


//});
app.controller('captainCtrl', function ($scope) {//scope es una variable global fuera del controlador
    $scope.captain = captainData; 
    $scope.editando = {};//copia cuando hagan cambios
    $scope.mostrarform = false;

    $scope.EditarCapt = function () {
        angular.copy($scope.captain, $scope.editando);
        $scope.mostrarform = true;
    };
    $scope.GuardarCapt = function () {
        angular.copy($scope.editando, $scope.captain);

        //según el vídeo habría que ocultarla al guardar, pero a mí me parece poco funcional así que no está
        //    $scope.mostrarform = false;

    };
    $scope.CancelarCapt = function () {
        $scope.editando = {};
        $scope.mostrarform = false;

    };
});

var captainData = {
    nombre: "Steve Rogers",
    bio: "Steven Rogers was born in the Lower East Side of Manhattan, New York City, in 1925 to poor Irish immigrants, Sarah and Joseph Rogers.Joseph died when Steve was a child, and Sarah died of pneumonia while Steve was a teen. By early 1940, before America's entry into World War II, Rogers is a tall, scrawny fine arts student specializing in illustration and a comic book writer and artist.<br> Disturbed by the rise of the Third Reich, Rogers attempts to enlist but is rejected due to his frail body. His resolution attracts the notice of U.S. Army General Chester Phillips and 'Project: Rebirth'. Rogers is used as a test subject for the Super-Soldier project, receiving a special serum made by 'Dr. Josef Reinstein',[55][56] later retroactively changed to a code name for the scientist Abraham Erskine.",
    edad: 97,
    foto: "img/captain.jpg"
}})();