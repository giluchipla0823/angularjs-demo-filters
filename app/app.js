(function(){
    angular.module('app', [
        'ngAnimate'
    ])
    .controller('HomeController', ['$scope', function($scope){
        $scope.amount = 1234.56;

        $scope.now = new Date();

        $scope.countries = ['Perú', 'Colombia', 'Argentina', 'Brasil'];

        $scope.friends = [
            {name:'John', phone:'555-1276'},
            {name:'Mary', phone:'800-BIG-MARY'},
            {name:'Mike', phone:'555-4321'},
            {name:'Adam', phone:'555-5678'},
            {name:'Julie', phone:'555-8765'},
            {name:'Juliette', phone:'555-5678'}
        ];

        $scope.number = 1234.56789;

        $scope.name = 'Gino Luiggi';

        $scope.reverse = false;

        $scope.numbers = [1,2,3,4,5,6,7,8,9];

        $scope.greeting = 'Hello friend';
    }])
    .filter('reverse', function() {
        return function(input, uppercase) {
            input = input || '';
            
            var out = '';
            
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }

            return out;
        };
    })
    .directive('appNavbar', [function () {
        return {
            restrict: 'E'
            , templateUrl: 'templates/shared/navbar.tpl.html'
        }
    }])
    .directive('appFooter', [function () {
        return {
            restrict: 'E'
            , templateUrl: 'templates/shared/footer.tpl.html'
        }
    }])
})();