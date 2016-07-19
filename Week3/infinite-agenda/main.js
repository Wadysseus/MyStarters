//Created the module 'agendaScroll'

angular.module('agendaScroll', []);


// Create a controller
angular.module('agendaScroll')
	.controller('agendaPalette', [
		paletteCtrl
	]);
	
	function paletteCtrl (){
		var pCtrl = this;
	}
	
	paletteCtrl.$inject = ['apptMaker'];
	
angular.module('agendaScroll')
	.factory('apptMaker', apptMaker)
	
	function apptMaker() {
		console.info('Factory online, human.')
		
		var dateMe = [{
			date:'Today' ,
			apptTime:'A while ago' ,
			apptName:'Poop on Drew' ,
			apptText:'You need to poop on Drew' ,
		}]
	};
	
