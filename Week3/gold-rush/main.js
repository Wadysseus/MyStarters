//Declare this fuckin' module
angular.module('GoldRush', []);


//Declare that fuckin' controller
angular.module('GoldRush')
    .controller('goldController', goldBoop);
    
        
function goldBoop ($scope){ 
    var gCtrl = this;
            gCtrl.goldCoord = [];
            console.log(gCtrl.goldCoord + " is the value of goldCoord, human.")
            gCtrl.addOnClick = function($event){
                gCtrl.goldCoord.push(
                    {
                        x: $event.pageX,
                        y: $event.pageY,
                        show: true,
                        submitShow: true,
                        hovered: false
                    }
                    )
                console.log(gCtrl.goldCoord + " is the new value of gCtrl.XY, human.")
    }
}
       

// angular.module('app',[])
// 	.controller('mapController',['$scope', function($scope){
// 		$scope.markers = [
// 		]

// 		$scope.clickHandler = function($event) {
// 			$scope.markers.push(
// 				{
// 					x: $event.pageX,
// 					y: $event.pageY,
// 					show: true,
// 					note: "",
// 					submitShow : true,
// 					hovered : false
// 				}
// 			);
// 		}
// 	}]);